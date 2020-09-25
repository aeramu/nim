import React from 'react'
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native'
import AccountList from '../../components/AccountList'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'

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
            <Header/>
            <View style={styles.roundedBox}>
                <SearchBar 
                    onChangeText={(text) => onChangeText(text)} 
                    containerStyle={styles.searchBar}
                />
                {loading
                    ?<ActivityIndicator/>
                    :
                        <AccountList 
                            data={data && (keyword != "")? data.search.edges : []} 
                            loadMore={(keyword != "") && data && data.search.pageInfo.hasNextPage}
                            onPress={() => loadMore()}
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
        marginTop:8,
        marginBottom:8
    }
})