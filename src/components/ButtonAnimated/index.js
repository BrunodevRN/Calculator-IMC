import React from 'react'
import { Pressable, Dimensions, Text } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'


export default props => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const positionWidth = useSharedValue(windowWidth / 3)
    const positionHeight = useSharedValue(windowHeight / 15)

    const animatedStyle = useAnimatedStyle(() => ({
        width: positionWidth.value,
        height: positionHeight.value
    }))

    function onPressIn() {
        positionWidth.value = withSpring(windowWidth / 2.5)
        positionHeight.value = withSpring(windowHeight / 13)
    }

    function onPressOut() {
        positionWidth.value = withSpring(windowWidth / 3)
        positionHeight.value = withSpring(windowHeight / 15)
    }

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={props.onPress}>
            <Animated.View style={[props.style, animatedStyle]}>
                <Text style={props.styleLabel}>{props.labelText}</Text>
            </Animated.View>
        </Pressable>
    )
}