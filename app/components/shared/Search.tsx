import { StyleSheet, TextInput, View } from "react-native"
import { FeImage, Image } from "react-native-svg";
import Icon from "react-native-vector-icons/Feather";

const SearchBox = ( {placeholder}: {placeholder: string}) => {
    return  (
        <View style={styles.inputContainer}>
            <Icon size={20} color={'#ADAEBC'} name="search"/>
            
            <TextInput style={styles.inputField} placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5EF',
        gap:5,
        padding: 10,
        borderRadius: 12
    },
    inputField: {
        flex: 1,
        color: '#ADAEBC',
        fontSize: 16,
        lineHeight:24,
        padding: 5,
    }
})

export default SearchBox;