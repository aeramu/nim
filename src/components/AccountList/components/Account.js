import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default ({nama, nim, jurusan}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.nama}>{nama}</Text>
            <Text style={styles.nim}>{nim}</Text>
            <Text style={styles.jurusan}>{jurusan}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    nama:{
        flex:5,
        marginRight:5
    },
    nim:{
        flex:3,
        marginRight:5
    },
    jurusan:{
        flex:4
    }
})