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
    headerTable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: Dimensions.get('window').width / 1.2, 
        height: Dimensions.get('window').height / 15,
        marginTop: Dimensions.get('window').height / 60, 
    },
    titleLabelHeader: {
        fontSize: Dimensions.get('window').height / 25,
        fontFamily: 'SignikaNegative-Bold',
        color: '#20B2AA',
    },
    boxTable: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 15,
        marginTop: Dimensions.get('window').height / 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    tableLabel: {
        fontSize: Dimensions.get('window').height / 45,
        color: '#fff',
        fontFamily: 'SignikaNegative-SemiBold',
    }
})