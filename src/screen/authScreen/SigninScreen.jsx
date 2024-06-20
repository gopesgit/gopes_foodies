import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../../component/Header'
import { colors, globalStyle, orangeButton, parameters } from '../../global/styles'
import * as Animatable from 'react-native-animatable'
import { Button, Icon, SocialIcon } from 'react-native-elements'
import { useRef, useState } from 'react'

export default function SigninScreen({navigation}) {
    //console.log(navigation);
    const [passvisable, setPassVisable] = useState(true)
    const emailText = useRef()
    const passwordText = useRef()
    return (
        
        <ScrollView style={styles.container}>
           
            <Header
                title={"My Account"}
                type={"arrow-with-circle-left"}
                navigation={navigation}
            />
            <View style={[globalStyle.centeritem, styles.mt12]}>
                <Text style={styles.title}>Sign-in</Text>
            </View>
            <View style={globalStyle.centeritem}>
                <Text style={styles.subtitle}>Please enter the email and password</Text>
            </View>
            <View style={[styles.mt12]}>
                <View style={globalStyle.textInputO}>
                    <TextInput
                        placeholder='Email'
                        ref={emailText}
                    />
                </View>
                <View style={globalStyle.textInputT}>
                    <Animatable.View animation={!passvisable ? "bounce" : "wobble"} duration={4000}>
                        <Icon
                            name="lock"
                            size={28}
                            color={colors.grey1}
                            type="entypo"
                        />
                    </Animatable.View>
                    <TextInput
                        placeholder='password'
                        secureTextEntry={!passvisable}
                        ref={passwordText}
                    />
                    <Animatable.View animation={!passvisable ? "bounce" : "swing"} duration={4000}>
                        {!passvisable ?
                            <Icon
                                name="eye-with-line"
                                size={28}
                                color={colors.grey1}
                                type="entypo"
                                onPress={() => setPassVisable(!passvisable)}
                            /> :
                            <Icon
                                name="eye"
                                size={28}
                                color={colors.grey1}
                                type="entypo"
                                onPress={() => setPassVisable(!passvisable)}
                            />
                        }
                    </Animatable.View>
                </View>

            </View>
            <View >
                <Button
                    title="Sign in"
                    //style=
                    buttonStyle={[globalStyle.orangeBTN]}
                    titleStyle={globalStyle.btnText}
                    onPress={()=>navigation.navigate('home-screen')}
                />
            </View>
            <View style={[globalStyle.centeritem, styles.mt12]}>
                <Text style={styles.subtitlewu}>Forgot Password ?</Text>
            </View>
            <View style={[globalStyle.mt25, globalStyle.centeritem]}>
                <Text style={globalStyle.hedertextBlack}>OR</Text>
            </View>
            <View>
                <SocialIcon
                    title='Signin With Facebook'
                    button
                    type='facebook'
                    style={globalStyle.socialicon}
                    onPress={() => { }}
                />
            </View>
            <View>
                <SocialIcon
                    title='Signin With Google'
                    button
                    type='google'
                    style={globalStyle.socialicon}
                    onPress={() => { }}
                />
            </View>
            <View style={[globalStyle.mt25, globalStyle.centeritem]}>
                <Text style={styles.subtitle}>New on Foodies ?</Text>
            </View>
            <View style={[globalStyle.mt25]}>
                <Button
                    title="Create New Account"
                    //style=
                    buttonStyle={[globalStyle.WhiteBTN]}
                    titleStyle={globalStyle.btnTextO}
                />
            </View>
            <Animatable.View style={[globalStyle.centeritem,globalStyle.mt25]} 
            animation={'bounce'} 
            iterationCount={'infinite'}
            duration='4000'>           
                 <Text style={styles.subtitle}>Enjoy Healthy Food!!!</Text>
            </Animatable.View>
            
        </ScrollView>
       
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mt12: {
        marginTop: 12,
    },
    title: {
        fontSize: parameters.titlefont,
        color: colors.buttons,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: parameters.subtitle,
        color: colors.grey3,
    },
    subtitlewu: {
        fontSize: parameters.subtitle,
        color: colors.grey3,
        textDecorationLine: 'underline',
    },





})