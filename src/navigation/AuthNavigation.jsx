import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import SigninWelocome from '../screen/authScreen/SigninWelocome'
import SigninScreen from '../screen/authScreen/SigninScreen'
import HomeScreen from '../screen/HomeScreen'
const AuthStack = createStackNavigator()
export default function AuthNavigation() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="welcome-screen"
                component={SigninWelocome}
                options={{
                    headerShown: false
                }
                }
            />
            <AuthStack.Screen
                name="sigin-screen"
                component={SigninScreen}
                options={{
                    headerShown: false
                }
                }
            />
              <AuthStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }
                }
            />
        </AuthStack.Navigator>
    )
}
const styles = StyleSheet.create({})