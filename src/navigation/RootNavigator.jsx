import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import AuthNavigation from './AuthNavigation'
export default function RootNavigator() {
    
  return (
    <NavigationContainer>
        <AuthNavigation/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({})