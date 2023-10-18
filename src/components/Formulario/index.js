import React, { useEffect, useRef, useState } from 'react'
import { View, Dimensions, Text, KeyboardAvoidingView, Platform,  } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { styles } from './styles'
import Input from '../Input/index'
import ButtonAnimated from '../ButtonAnimated'
import { Icon } from '@rneui/themed'
import AnimatedLottieView from 'lottie-react-native'



export default ({ navigation }) => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    const heightIcon = <Icon name='human-male-height' type='material-community' color='#000' size={windowHeight / 19} />
    const weightIcon = <Icon name='weight-kilogram' type='material-community' color='#000' size={windowHeight / 19}/>
    const arrow = <Icon name='arrow-right' type='entypo' color='#000' size={windowHeight / 19}/>
    const errorInput =<Icon name='close' type='ionicon' color='#FF0000' size={windowHeight / 19}/>

    const { control, handleSubmit, reset, formState:{ errors, isSubmitSuccessful }} = useForm({
        defaultValues: {
            altura: '',
            peso: ''
        }
    })


    const [checkAnimated, setCheckAnimated] = useState(false)
    const [dadosUser, setDadosUser] = useState(null)

    const animationDoctor = useRef(null)
    const animationCheck = useRef(null)

    useEffect(() => {
        if(checkAnimated) {
            animationCheck.current.play()
        } else {
            animationDoctor.current.play()
        }
    }, [checkAnimated])

    useEffect(() => {
        reset({
            altura: '',
            peso: '',
        })
    }, [isSubmitSuccessful])


    function activateAnimation(data) {
        setDadosUser({...data})
        setCheckAnimated(!checkAnimated)
    }

    return (
            <View style={styles.container}>
                <View style={{width: windowWidth / 1, height: windowHeight / 5.5}}>
                    {checkAnimated ? 
                        <AnimatedLottieView
                            autoPlay={false}
                            loop={false}
                            ref={animationCheck}
                            source={require('../../../assets/animations/check.json')}
                            onAnimationFinish={() => {
                                const {altura, peso} = dadosUser
                                const imc = (peso / Math.pow(altura, 2)).toFixed(1)
                                setCheckAnimated(!checkAnimated)
                                return navigation.navigate('Resultado IMC', {altura, peso, imc})
                            }}
                        />
                        :
                        <AnimatedLottieView
                            autoPlay={false}
                            loop={false}
                            ref={animationDoctor}
                            speed={1}
                            source={require('../../../assets/animations/doctor.json')}
                        />
                    }
                </View>
         
                <View style={styles.containerInputAltura}>
                    <Text style={styles.labelInput}>Altura</Text>
                    <Controller
                        name='altura'
                        control={control}
                        rules={{
                            required: 'Insira sua altura',
                            pattern:{
                                value:/^\d{1}[+\.]\d{1,2}$/g,
                                message: 'Altura invalida'
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.boxInput} >
                                {errors.altura ?
                                    errorInput
                                    :
                                    arrow
                                }
                                <Input
                                    style={[
                                        styles.input, 
                                        {                                     
                                            backgroundColor: errors.altura ? 'rgba(178, 34, 34, 0.1)' : '#FFF',
                                            borderWidth: errors.altura ? 1 : 0,
                                            borderColor: errors.altura ? 'rgba(178, 34, 34, 0.5)' : '#363636',
                                            color: errors.altura ? '#B22222' : '#000',
                                        }
                                    ]}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder='Ex: 1.80'
                                    numberOfLines={1}
                                    inputMode='numeric'
                                    textAlign='center'
                                />
                                {heightIcon}
                            </View>
                        )}
                    />
                    {errors.altura && <Text style={styles.labelErrors}>{errors.altura?.message}</Text>}
                </View>

                <View style={styles.containerInputPeso}>
                    <Text style={styles.labelInput}>Peso</Text>
                    <Controller
                        name='peso'
                        control={control}
                        rules={{
                            required: 'Insira seu peso',
                            pattern:{
                                value:/^\d{1,3}$/g,
                                message: 'Peso invalido'
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={[styles.boxInput]}>
                                {errors.peso ?
                                    errorInput
                                    :
                                    arrow
                                }
                                <Input
                                    style={[
                                        styles.input,
                                        {
                                            backgroundColor: errors.peso ? 'rgba(178, 34, 34, 0.1)' : '#FFF',
                                            borderWidth: errors.peso ? 1 : 0,
                                            borderColor: errors.peso ? 'rgba(178, 34, 34, 0.5)' : '#363636',
                                            color: errors.peso ? '#B22222' : '#000',
                                        }
                                    ]}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder='Ex: 80'
                                    numberOfLines={1}
                                    inputMode='numeric'
                                    textAlign='center'
                                />
                                {weightIcon}
                            </View>
                        )}
                    />
                    {errors.peso && <Text style={styles.labelErrors}>{errors.peso?.message}</Text>}
                </View>

                <View style={styles.containerButton}>
                    <ButtonAnimated 
                        onPress={handleSubmit(activateAnimation)}
                        style={[styles.button, styles.buttonCalcular]}
                        styleLabel={styles.buttonLabel}
                        labelText='Calcular'
                    />
                    <ButtonAnimated 
                        onPress={() => reset()}
                        style={[styles.button, styles.buttonLimpar]}
                        styleLabel={styles.buttonLabel}
                        labelText='Limpar'
                    />
                </View>
            </View>     
    )
}