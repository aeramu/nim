import React from 'react'
import {Button} from 'react-native'

export default ({onPress}) => {
    return(
        <Button
            title='Load More'
            onPress={() => onPress()}
        />
    )
}