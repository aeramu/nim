import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default ({onChangeText, onPress}) => {
    return(
        <View>
            <TextInput
                placeholder='Ketik nama atau NIM...' 
                onChangeText={(text) => onChangeText(text)}
            />
            <Button 
                title='search'
                onPress={() => onPress()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
})

