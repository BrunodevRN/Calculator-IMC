import React from 'react'
import { Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Calculadora from '../screens/Calculadora/index'
import TabelaImc from '../screens/TabelaImc/index'
import { Icon } from '@rneui/themed'


const Tab = createBottomTabNavigator()

export default function TabNavigation() {

    const windowHeight = Dimensions.get('window').height

    return (
        <Tab.Navigator
            initialRouteName='Calculadora'
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: windowHeight / 14,
                    elevation: 0,
                    borderTopWidth: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    position: 'absolute',
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName
                    let typeIcon

                    if(route.name === 'Calculadora') {
                        typeIcon = 'ionicon'
                        iconName = focused ? 'calculator' : 'calculator-outline'
                        color = focused ? '#4169E1' : '#696969'

                        } else if(route.name === 'Tabela IMC') {
                            typeIcon = 'material-community'
                            iconName = focused ? 'table-eye' : 'table'
                            color = focused ? '#8B0000' : '#696969'
                        }

                        return <Icon  name={iconName} type={typeIcon} size={windowHeight / 20} color={color} />
                    },
                })}                
            >
            <Tab.Screen name='Calculadora' component={Calculadora} />
            <Tab.Screen name='Tabela IMC' component={TabelaImc}/>
        </Tab.Navigator>
    )
}