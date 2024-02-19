import { View, Text, ActivityIndicator } from 'react-native'
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <View className='flex-1 flex-row gap-4 items-center justify-center bg-slate-900'>
      <Text className='text-white' >Carregando</Text>
      <ActivityIndicator color={colors.white} />
    </View>
  )
}