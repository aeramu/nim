import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

export default ({onChangeText}) => {
    return(
        <View>
            <TextInput
                placeholder='Ketik nama atau NIM...' 
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
})

