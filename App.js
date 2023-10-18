import { StatusBar } from 'expo-status-bar'
import Navigation from './src/routes/Navigation'
import { View } from 'react-native'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Navigation />
      <StatusBar translucent />
    </View>
  )
}