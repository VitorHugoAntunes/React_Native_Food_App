import { SafeAreaView, Text } from 'react-native';
import { Slot } from 'expo-router';

import { Loading } from '@/components/Loading'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter'

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className='flex-1 bg-slate-900'>
      <Slot />
    </SafeAreaView>
  )
}