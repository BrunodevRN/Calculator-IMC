import React from 'react'
import { 
    View, 
    Text, 
    Dimensions,
    FlatList
} from 'react-native'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { tabela } from '../../data/index'
import { Icon } from '@rneui/themed'
import AnimatedLottieView from 'lottie-react-native'


export default function Tabela() {

    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    function getTable(item) {
        return(
            <View style={styles.boxTable}>
                <Text style={styles.tableLabel}>{item.categoria}</Text>
                <Text><Icon type='materialicon' name='keyboard-arrow-right' size={windowHeight / 30}/></Text>
                <Text style={styles.tableLabel}>{item.imc}</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            
            <LinearGradient 
                colors={['#182848', '#eaafc8']}
                style={styles.linearGradient}
            >
                      
                <View style={styles.header}>
                    <Text style={styles.headerTitleLabel}>Tabela Imc</Text>
                </View>

                <View style={{width: windowHeight / 5, height: windowHeight / 5.5}}>
                    <AnimatedLottieView
                        autoPlay
                        loop
                        speed={0.8}
                        cacheStrategy='weak' 
                        source={require('../../../assets/animations/list.json')}
                    />
                </View>

                <View style={styles.headerTable}>
                    <Text style={styles.titleLabelHeader}>Categoria</Text>
                    <Text style={[styles.titleLabelHeader, {marginRight: windowWidth / 12}]}>IMC</Text>
                </View>
                
                <FlatList 
                    data={tabela}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => getTable(item)}
                />
            
            </LinearGradient>
        </View>
    )
}
