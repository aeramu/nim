import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

export default ({onChangeText}) => {
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='Ketik nama atau NIM...' 
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
        width:300,
    }
})

