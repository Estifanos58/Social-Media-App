import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const CustomBtn = ({title}: {title: string}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
                <Image style={styles.buttonIcon} source={title === "Google" ? require('@/assets/icons/google.png') : require('@/assets/icons/microsoft.png')}/>
                <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        width: 163,
        height:56,
        justifyContent: 'center',
        alignItems: 'center', 
        // ✅ Border
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#FFFFFF',
        // ✅ Shadow (iOS)
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,

        // ✅ Elevation (Android)
        // elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
})

export default CustomBtn;