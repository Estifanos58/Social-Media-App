import { StyleSheet, View } from "react-native"
import Logo  from "../components/shared/Logo"
import Input  from "../components/shared/Input"
import Button from "../components/shared/Button"

export const Login = () => {

    return(
        <View>
            
            <View style={style.outerContainer}>
                <View style={style.logoContainer}>
                    <Logo/>
                </View>
                <View style={style.InputContainer}>
                    <Input title="Email" placeholder="Enter your email"/>
                    <Input title="Password" placeholder="Enter your password" />
                    <Button title="Log In"/>
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
    }
  })