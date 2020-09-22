import React from 'react'
import {View} from 'react-native'
import AccountList from '../components/AccountList'

const data = []

export default () => {
    return(
        <View>
            <AccountList data={data}/>
        </View>
    )
}