import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default ({nama, nimTPB, nimJurusan, fakultas, jurusan, status}) => {
    return(
        <View style={styles.container}>
            <Text>{nama}</Text>
            <Text>{nimTPB}</Text>
            <Text>{nimJurusan}</Text>
            <Text>{fakultas}</Text>
            <Text>{jurusan}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    }
})