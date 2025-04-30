import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";

const Input = ({title, value, onChange, placeholder, isPassword}: {title: 'Email' | 'Password'; placeholder:string; value: string; onChange:any;  isPassword: boolean}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <>
        <View style={style.inputCotainer}>
            <Text style={style.title}>{title}</Text>
            <View style={style.input}>
                <Image style={style.icon} source={title ===  "Email" ? require('@/assets/icons/email.png') : require('@/assets/icons/question.png')}/>
                <TextInput value={value} onChange={onChange} style={style.inputText} placeholder={placeholder} secureTextEntry={isPassword && isPasswordVisible}/>
                {isPassword && <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}><Image style={style.icon} source={isPasswordVisible ? require('@/assets/icons/eye-open.png') : require('@/assets/icons/closed-eye.png')} /></TouchableOpacity>}
            </View>
        </View>
        </>
    ) 
}

const style = StyleSheet.create({
    inputCotainer: {
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 20,
    },
    icon: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
        padding: 10,
        marginTop: 5,
        gap: 5,
    },
    inputText: {
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    title: {
        color: "#1E3652",
        fontWeight: '600',
    }

})

export default Input;