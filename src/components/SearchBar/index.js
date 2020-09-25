import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default ({onChangeText, containerStyle}) => {
    return(
        <View style={containerStyle}>
            <View style={styles.container}>
                <Icon
                    name='search'
                    size={15}
                    color="#aaa"
                    style={styles.icon}
                />
                <TextInput
                    placeholder='Ketik nama atau NIM...' 
                    onChangeText={(text) => onChangeText(text)}
                    style={styles.input}
                />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        marginRight:10,
    },
    input:{
        flex:1,
        outline:'none'
    }
})

