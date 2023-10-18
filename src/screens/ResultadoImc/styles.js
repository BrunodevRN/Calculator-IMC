import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    linearGradient: {
        width: '100%', 
        height: '100%', 
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 25,
        width: Dimensions.get('window').width / 1.1, 
    },
    headerTitleLabel: {
        fontSize: Dimensions.get('window').height / 16,
        color: '#fff',
        fontFamily: 'SignikaNegative-Bold',
    },
    animationHeader: {
        width: Dimensions.get('window').width / 10, 
        height: Dimensions.get('window').height / 10,
    },
    boxResult: {
        width: Dimensions.get('window').width / 1.1,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 45,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    titleLabel: {
        fontFamily: 'SignikaNegative-Bold', 
        fontSize: Dimensions.get('window').height / 25, 
        color:'#fff',
    },
    boxButtons: {
        marginTop: Dimensions.get('window').height / 30, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: Dimensions.get('window').width / 1.1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonsLabel: {
        fontFamily: 'SignikaNegative-Bold',
        fontSize: Dimensions.get('window').height / 35,
        color: '#fff'
    },
    buttonCalculadora: {
        backgroundColor: 'rgba(24, 40, 72, 0.9)'
    },
    buttonInfoImc: {
        backgroundColor: 'rgba(255,99,71,0.9)'
    },
})