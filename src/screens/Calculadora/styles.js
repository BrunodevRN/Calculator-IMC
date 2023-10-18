import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: Dimensions.get('window').height / 20,
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    headerLabel: {
        fontSize: Dimensions.get('window').height / 16,
        color: '#fff',
        fontFamily: 'SignikaNegative-Bold',
    },
    containerFormulario: {
        height: Dimensions.get('window').height / 1.5,
        width: Dimensions.get('window').width / 1.1,
        marginTop: Dimensions.get('window').height / 35,
        paddingTop: Dimensions.get('window').height / 55,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
})