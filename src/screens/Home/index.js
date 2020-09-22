import React from 'react'
import {View} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'

import {useLazyQuery} from '@apollo/client'
import {SEARCH} from './search'

export default () => {
    const [keyword, setKeyword] = React.useState("")
    const [search, {data, loading}] = useLazyQuery(SEARCH)

    return(
        <View>
            <SearchBar 
                onChangeText={(text) => setKeyword(text)}
                onPress={() => search({
                    variables:{
                        keyword: keyword,
                        first: 10,
                    }
                })}    
            />
            <AccountList data={data}/>
        </View>
    )
}