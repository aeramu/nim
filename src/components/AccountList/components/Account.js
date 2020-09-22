import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default ({nama, nim, jurusan}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nama}>{nama}</Text>
            <Text style={styles.nama}>{nim}</Text>
            <Text style={styles.nama}>{jurusan}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    nama:{
        flex:1,
        borderWidth:1,
        borderColor:"#ccc",
        padding:5,
    }
})