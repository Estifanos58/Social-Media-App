import { StyleSheet, Text } from "react-native"
import { View } from "react-native"

export const Header = ({title}: {title:string}) => {
    return (
        <View style={styles.textWrapper}>
            <Text style={styles.text}>{title.toLocaleUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrapper: {
        marginVertical: 5
    },
    text: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '600'
    }
}) 