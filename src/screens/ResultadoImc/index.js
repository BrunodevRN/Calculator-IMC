import React, { useState } from 'react'
import { 
    View, 
    Text,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import AnimatedLottieView from 'lottie-react-native'
import ButtonAnimated from '../../components/ButtonAnimated/index'



export default ({ route, navigation }) => {
    
    const {altura, peso, imc} = route.params
    const pesoIdealMin =  (Math.pow(altura, 2) * 18.5).toFixed(1)
    const pesoIdealMax = (Math.pow(altura, 2) * 24.9).toFixed(1)


    const [categoria, setCategoria] = useState('')

    function getCategoria(imc) {
        if(imc < 18.5) {
            setCategoria(categoria => 'Abaixo do peso')
        } else if(imc <= 24.9) {
            setCategoria(categoria => 'Saudavel')
        } else if(imc <= 29.9) {
            setCategoria(categoria => 'Sobrepeso')
        } else if(imc <= 34.9) {
            setCategoria(categoria => 'Obesidade 1')
        } else if(imc <= 39.9) {
            setCategoria(categoria => 'Obesidade 2')
        } else {
            setCategoria(categoria => 'Obesidade 3')
        }
    }
    
    return (
        <View style={styles.container} onLayout={() => getCategoria(imc)}>
            <LinearGradient 
                        colors={['#182848', '#eaafc8']}
                        style={styles.linearGradient}
            > 
        
                <View style={styles.header}>
                    <Text style={styles.headerTitleLabel}>Resultado</Text>
                    <AnimatedLottieView 
                        source={require('../../../assets/animations/heartBeatMedical.json')}
                        autoPlay
                        loop
                        cacheStrategy='weak'
                        speed={0.5}
                        cacheComposition
                        style={styles.animationHeader}
                    />
                </View>

                <View style={styles.boxResult}>
                    <Text style={styles.titleLabel}>IMC</Text>
                    <Text style={[styles.titleLabel, {color: categoria !== 'Saudavel' ? '#B22222' : '#00FF7F'}]}>{imc}</Text>
                </View>

                <View style={styles.boxResult}>
                    <Text style={styles.titleLabel}>Categoria</Text>
                    <Text style={[styles.titleLabel, {color: categoria !== 'Saudavel' ? '#B22222' : '#00FF7F'}]}>{categoria}</Text>
                </View>

                <View style={styles.boxResult}>
                    <Text style={styles.titleLabel}>Peso atual</Text>
                    <Text style={[styles.titleLabel, {color: categoria !== 'Saudavel' ? '#B22222' : '#00FF7F'}]}>{peso}kg</Text>
                </View>
 
                <View style={styles.boxResult}>
                    <Text style={styles.titleLabel}>Peso ideal</Text>
                    <Text style={[styles.titleLabel, {color: categoria !== 'Saudavel' ? '#B22222' : '#00FF7F'}]}>{pesoIdealMin}kg - {pesoIdealMax}kg</Text>
                </View>
                    

                {categoria !== 'Saudavel' ?  
                    <View style={styles.boxResult}>
                        <Text style={styles.titleLabel}>Diferença</Text>
                            {peso > pesoIdealMax ? 
                                <Text style={[styles.titleLabel, {color: '#B22222'}]}>+{(peso - pesoIdealMax).toFixed(1)}kg</Text>
                            : 
                                <Text style={[styles.titleLabel, {color: '#B22222'}]}>{(peso - pesoIdealMin).toFixed(1)}kg</Text>
                            }
                    </View>
                    :
                    <View style={styles.boxResult}>
                        <Text style={[styles.titleLabel, {color: '#00FF7F'}]}>Dentro da faixa de peso</Text>
                    </View> 
                }

                <View style={styles.boxButtons}>
                    <ButtonAnimated 
                        style={[styles.button, styles.buttonCalculadora]}
                        styleLabel={styles.buttonsLabel}
                        labelText='Calculadora'
                        onPress={() => navigation.goBack()}
                    />

                    <ButtonAnimated 
                        style={[styles.button, styles.buttonInfoImc]}
                        styleLabel={styles.buttonsLabel}
                        labelText='Tabela IMC'
                        onPress={() => navigation.navigate('Tabela IMC')}
                    />
                </View>
            
        </LinearGradient> 
       </View>
    )
}
