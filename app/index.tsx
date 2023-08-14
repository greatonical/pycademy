import { View, Text } from 'react-native'
import React from 'react'
import '../config/firebase'
import Onboarding from './auth/onboarding'

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
  } from 'react-native-safe-area-context';
  import {
    useFonts,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    DMSans_800ExtraBold,
    DMSans_900Black,
  } from "@expo-google-fonts/dm-sans";
import { getAuth } from 'firebase/auth'
import { useRouter } from 'expo-router/src/exports';
import Home from './menu/home';


export default function index() {
  const auth = getAuth()
  const router = useRouter()
    let [fontsLoaded] = useFonts({
        "dmsans":DMSans_400Regular,
        "dmsans-medium": DMSans_500Medium,
        DMSans_600SemiBold,
        DMSans_700Bold,
        DMSans_800ExtraBold,
        DMSans_900Black,
      });
    
      if (!fontsLoaded) {
        return null;
      }
      if (auth.currentUser != null){
        return (
          <SafeAreaProvider>
         <Onboarding/>
          </SafeAreaProvider>
        )
      }
      else{
        return (
          <SafeAreaProvider>
            <Home/>
          </SafeAreaProvider>
        )
      }
 
}