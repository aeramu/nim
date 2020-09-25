import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ITB NIM Finder</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:20
    },
    text:{
        fontSize:30,
    }
})