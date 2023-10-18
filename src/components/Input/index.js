import React from 'react'
import { TextInput } from 'react-native'

export default props => {
    return (
        <TextInput 
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={props.style}
            numberOfLines={props.numberOfLines}
            value={props.value}
            inputMode={props.inputMode}
            textAlign={props.textAlign}
        />
    )
}