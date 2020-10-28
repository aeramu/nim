import React from 'react'
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'

import {useLazyQuery} from '@apollo/client'
import {SEARCH} from './search'

import * as Analytics from 'expo-firebase-analytics'

export default () => {
    const [keyword, setKeyword] = React.useState("")
    const [timer, setTimer] = React.useState()
    const [search, {data, loading, fetchMore}] = useLazyQuery(SEARCH)

    React.useEffect(() => {
        const logAnalytic = async () => {
            await Analytics.logEvent('Web accessed',{})
        }
        logAnalytic()
    },[])

    const loadMore = async () => {
        await Analytics.logEvent('Load more',{
            keyword: keyword
        })
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
        if (text !== ""){
            setTimer(setTimeout(async () => {
                search({
                    variables:{
                        keyword: text,
                        first: 20,
                    }
                })
                await Analytics.logEvent('Search',{
                    keyword: text
                })
                setTimer(null)
            }, 500))
        }
        setKeyword(text)
    }

    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.roundedBox}>
                <SearchBar 
                    onChangeText={(text) => onChangeText(text)} 
                    containerStyle={styles.searchBar}
                />
                {keyword === "" | timer
                    ? <></>
                    : loading
                        ? <ActivityIndicator style={styles.activity}/>
                        :
                            <AccountList 
                                data={data? data.search.edges : []} 
                                loadMore={data && data.search.pageInfo.hasNextPage}
                                onPress={() => loadMore()}
                                containerStyle={styles.list}
                            />
                }
            </View>
        </View>
    )
}

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: screen.width > 800? 'center' : 'stretch',
        paddingHorizontal: 15,
        paddingBottom:30,
    },
    roundedBox:{
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:15,
        borderColor:"#aaa",
        alignItems:'stretch',
        width: screen.width > 800? 800 : 'auto'
    },
    searchBar:{
        paddingTop:8,
        paddingBottom:8,
    },
    activity:{
        borderTopWidth:1,
        borderTopColor:"#ccc",
        paddingVertical:20
    },
    list:{
        borderTopWidth:1,
        borderTopColor:"#ccc",
        paddingTop: 10,
    }
})