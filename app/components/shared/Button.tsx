import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Button = ({ title }: { title: string }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <View>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FDA301',
        width: 342,
        height: 56,
        marginHorizontal: 25,
        borderRadius: 12,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        // ✅ Border
        borderWidth: 1,
        borderColor: '#E08A00',

        // ✅ Shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // ✅ Elevation (Android)
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});

export default Button;
