import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadAnimation: {
        height: Dimensions.get('window').height / 2.5,
        width: Dimensions.get('window').width / 1.3,
    },
})