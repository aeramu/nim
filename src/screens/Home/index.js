import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'

import {useLazyQuery} from '@apollo/client'
import {SEARCH} from './search'

export default () => {
    const [keyword, setKeyword] = React.useState("")
    const [timer, setTimer] = React.useState()
    const [search, {data, loading}] = useLazyQuery(SEARCH)

    const onChangeText = (text) => {
        clearTimeout(timer)
        if (text != ""){
            setTimer(setTimeout(() => search({
                variables:{
                    keyword: text,
                    first: 20,
                }
            }), 500))
        }
        setKeyword(text)
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