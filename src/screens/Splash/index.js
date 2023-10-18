import React, { useCallback, useEffect, useRef } from 'react'
import { View } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { styles } from './styles'
import { useFonts } from 'expo-font'
import AnimatedLottieView from 'lottie-react-native'
import * as SplashScreen from 'expo-splash-screen'



export default ({ navigation }) => {

    const animationProgressBar = useRef(null)
    const animationHeart = useRef(null)

    const [fonstCarregadas] = useFonts({
        'SignikaNegative-Bold': require('../../../assets/fonts/SignikaNegative-Bold.ttf'),
        'SignikaNegative-Light': require('../../../assets/fonts/SignikaNegative-Light.ttf'),
        'SignikaNegative-Medium': require('../../../assets/fonts/SignikaNegative-Medium.ttf'),
        'SignikaNegative-Regular': require('../../../assets/fonts/SignikaNegative-Regular.ttf'),
        'SignikaNegative-SemiBold': require('../../../assets/fonts/SignikaNegative-SemiBold.ttf'),
    })


    useEffect(() => {
      async function prepararCarregamento() {
        await SplashScreen.preventAutoHideAsync()
      }
      prepararCarregamento()
    }, [])

    const onLayout = useCallback(async () => {
        if (fonstCarregadas) {
          await SplashScreen.hideAsync();
        }
      }, [fonstCarregadas]);
    
      if (!fonstCarregadas) {
        return null;
      }
      
      function startAnimationLoading() {
        animationHeart.current.play()
        animationProgressBar.current.play()
      }

  return (
    <View style={styles.container} onLayout={onLayout}>

      <View style={styles.loadAnimation} onLayout={startAnimationLoading}>
        <AnimatedLottieView
          autoPlay={false}
          loop
          ref={animationHeart}
          source={require('../../../assets/animations/heartSplashScreen.json')}
        />
      
        <AnimatedLottieView
          autoPlay={false}
          loop={false}
          speed={1.5}
          ref={animationProgressBar}
          source={require('../../../assets/animations/progressBarSplashScreen.json')}
          onAnimationFinish={() => navigation.dispatch(StackActions.replace('TabNavi'))}
        />
      
      </View>
    </View>
  )
}