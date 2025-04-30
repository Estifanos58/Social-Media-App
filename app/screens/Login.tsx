import { Alert, NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, View } from "react-native"
import Logo  from "../components/shared/Logo"
import Input  from "../components/shared/Input"
import Button from "../components/shared/Button"
import CustomBtn from "../components/CustomBtn"
import { FormEvent, useState } from "react"

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        Alert.alert("Hi")
        console.log({"Email: ": email, "password: ": password })
        // Add your login logic here
    }


    return(
        <View>
            
            <View style={style.outerContainer}>
                <View style={style.logoContainer}>
                    <Logo/>
                </View>
                <View style={style.InputContainer}>
                    <Input value={email} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>)=>setEmail(e.nativeEvent.text)} title="Email" placeholder="Enter your email" isPassword={false}/>
                    <Input value={password} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>)=>setPassword(e.nativeEvent.text)} title="Password" placeholder="Enter your password" isPassword={true} />
                    <Button onPress={handleSubmit} title="Log In"/>
                </View>
                <View style={style.HrContainer}>
                    <View style={style.hr}/>
                    <Text>or continue with</Text>
                    <View style={style.hr}/>
                </View>
                <View style={style.btnContainer}>
                    <CustomBtn title="Google"/>
                    <CustomBtn title="Microsoft"/>
                </View>
                <View>
                    <Text style={style.footerText}>Don't have an account? <Text style={style.footerSubText}>Create Account</Text></Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    logoContainer: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center"
    },
    outerContainer: {
      marginTop: 60,
    },
    InputContainer: {
        marginTop: 55
    },
    HrContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    hr: {
        width: 100,
        height: 1,
        backgroundColor: '#949494',
    },
    hrText: {
        color: '#949494',
        fontSize: 16,
        fontWeight: '600',
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#949494',
        fontSize: 16,
    }, 
    footerSubText: {
        color: '1E3652',
        fontWeight: '600',
    } 
  })