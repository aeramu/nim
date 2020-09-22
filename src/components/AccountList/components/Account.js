import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default ({}) => {
    return(
        <View style={styles.container}>
            <Text>nama</Text>
            <Text>nim</Text>
            <Text>nim jurusan</Text>
            <Text>fakultas</Text>
            <Text>jurusan</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    }
})