import React from 'react'
import {View, Text} from 'react-native'
import AccountList from '../components/AccountList'
import SearchBar from '../components/SearchBar'

const data = [1,2,3,4]

export default () => {
    const [keyword, setKeyword] = React.useState("")

    return(
        <View>
            <SearchBar 
                onChangeText={(text) => setKeyword(text)}
                onPress={() => console.log(keyword)}    
            />
            <AccountList data={data}/>
        </View>
    )
}