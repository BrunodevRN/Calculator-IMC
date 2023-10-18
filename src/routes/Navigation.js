import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation'
import StackNavigation from './StackNavigation'


export default function navigation() {

    function TabNavi() {
        return <TabNavigation />
    }

    return (
        <NavigationContainer>
           <StackNavigation name='TabNavi' component={TabNavi}/> 
        </NavigationContainer>
    )
}