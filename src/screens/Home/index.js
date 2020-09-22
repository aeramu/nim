import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'

import {useLazyQuery} from '@apollo/client'
import {SEARCH} from './search'

export default () => {
    const [search, {data, loading, fetchMore}] = useLazyQuery(SEARCH)

    return(
        <View>
            <SearchBar 
                onChangeText={(text) => search({
                    variables:{
                        keyword: text,
                        first: 20,
                    }
                })} 
            />
            {loading
                ?<AccountList data={data? data.search.edges : []}/>
                :<ActivityIndicator/>
            }
        </View>
    )
}