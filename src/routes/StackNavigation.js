import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash/index'
import ResultadoImc from '../screens/ResultadoImc/index'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name={props.name} component={props.component}/>
            <Stack.Screen name='Resultado IMC' component={ResultadoImc} />
        </Stack.Navigator>
    )
}