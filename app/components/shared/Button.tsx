import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Button = ({title}: {title: string})=>{
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <View>
                <Text style={styles.buttonText}>Log In</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FDA301',
        width:342,
        height: 56,
        marginHorizontal: 25,
        borderRadius:12,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
})

export default Button;