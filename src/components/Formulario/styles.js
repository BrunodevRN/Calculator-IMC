import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    checkbox: {
        height: Dimensions.get('window').height / 6.5,
        width: Dimensions.get('window').width / 3,
    },
    containerStyleCheckBox: {
        height: Dimensions.get('window').height / 7, 
        width: Dimensions.get('window').width / 3.5,
        backgroundColor: 'transparent'
    },
    containerInputAltura: {
        alignItems: 'center',
        height: Dimensions.get('window').height / 7,
        width: Dimensions.get('window').width / 1.5,
        marginTop: Dimensions.get('window').height / 45,  
    },
    containerInputPeso: {
        alignItems: 'center',
        height: Dimensions.get('window').height / 7,
        width: Dimensions.get('window').width / 1.5,
        marginTop: Dimensions.get('window').height / 45,
    },
    labelInput: {
        fontSize: Dimensions.get('window').height / 30,
        fontFamily: 'SignikaNegative-Bold',
        color: '#fff',
    },
    boxInput: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 60,
    },
    input: {
        height: Dimensions.get('window').height / 18,
        width: Dimensions.get('window').width / 2.5,
        fontSize: Dimensions.get('window').height / 35,
        fontFamily: 'SignikaNegative-Medium',
        borderRadius: 15,
        marginHorizontal: Dimensions.get('window').height / 60,
    },
    labelErrors: {
        fontSize: Dimensions.get('window').height / 45,
        fontFamily: 'SignikaNegative-Medium',
        color: '#B22222',
    },
    containerButton: {
        flexDirection: 'row',
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').width / 1.2,
        marginTop: Dimensions.get('window').height / 40,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonLabel: {
        fontFamily: 'SignikaNegative-Bold',
        fontSize: Dimensions.get('window').height / 35,
        color: '#fff'
    },
    buttonCalcular: {
        backgroundColor: 'rgba(24, 40, 72, 0.9)'
    },
    buttonLimpar: {
        backgroundColor: 'rgba(255,99,71,0.9)'
    },
})