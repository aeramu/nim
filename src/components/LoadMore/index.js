import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"

export default ({onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Icon style={styles.icon} name="down"/>
            <Text style={styles.text}>Hasil lainnya</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        paddingVertical:5,
        paddingHorizontal:10,
        margin:10,
        borderWidth:1,
        borderColor:"#aaa",
        borderRadius:20
    },
    text:{
        color:"#555"
    },
    icon:{
        marginRight:5,
        color:"#555"
    }
})