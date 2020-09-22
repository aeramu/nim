import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'

import {useLazyQuery} from '@apollo/client'
import {SEARCH} from './search'

export default () => {
    const [keyword, setKeyword] = React.useState("")
    const [search, {data, loading}] = useLazyQuery(SEARCH)

    const onChangeText = (text) => {
        setKeyword(text)
        if (keyword != "") {
            search({
                variables:{
                    keyword: keyword,
                    first: 20,
                }
            })
        }
    }

    return(
        <View style={styles.container}>
            <SearchBar 
                onChangeText={(text) => onChangeText(text)} 
            />
            {loading
                ?<ActivityIndicator/>
                :<AccountList data={data && (keyword != "")? data.search.edges : []}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    }
})