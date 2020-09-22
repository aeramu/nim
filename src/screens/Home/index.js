import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'
import LoadMore from '../../components/LoadMore'

import {useLazyQuery} from '@apollo/client'
import {SEARCH} from './search'

export default () => {
    const [keyword, setKeyword] = React.useState("")
    const [timer, setTimer] = React.useState()
    const [search, {data, loading, fetchMore}] = useLazyQuery(SEARCH)

    const loadMore = () => {
        fetchMore({
            variables:{
                keyword: keyword,
                first: 20,
                after: data.search.pageInfo.endCursor
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
                return {
                    search:{
                        __typename: previousResult.search.__typename,
                        edges: [
                            ...previousResult.search.edges,
                            ...fetchMoreResult.search.edges,
                        ],
                        pageInfo: fetchMoreResult.search.pageInfo
                    }
                }
            }
        })
    }

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
                :<>
                    <AccountList data={data && (keyword != "")? data.search.edges : []}/>
                    {data && data.search.pageInfo.hasNextPage && <LoadMore onPress={() => loadMore()}/>}
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    }
})