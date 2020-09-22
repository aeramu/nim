import React from 'react'
import {FlatList} from 'react-native'
import Account from './components/Account'

export default ({data}) => {

    return(
        <FlatList
            data={data}
            renderItem={({item})=>(<Account/>)}
        />
    )
}