import { StyleSheet, Text, View } from "react-native"
const Logo = () => {
    return <>
    
    <View style={style.logoOuterContainer}>
        <View style={style.logoInerContainer}>
            <Text style={style.textStyle}>K</Text>
        </View>
    </View>

    </>
}


const style = StyleSheet.create({
    textStyle: {
        fontSize: 60,
        color: 'white',
    },
    logoInerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#091F37",
        height: 96,
        width:96,
    },
    logoOuterContainer: {
        padding:10,
        backgroundColor: "#1E3652",
        width: 128,
        height: 128,
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Logo;