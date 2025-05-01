import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

interface Messages  {
    id: number;
    name: string;
    lastText:string;
    image: string;
    lastTime: string;
    
}

const DirectMessage = ({messages}: {messages:Messages}) => {
    return (
        <TouchableOpacity>
            <View style={styles.channelNameContainer}>
                <View style={styles.groupLeft}>
                    <View style={styles.imageContainer}>
                        {/* <Image/> */}
                    </View>
                    <View>
                        <Text style={styles.selectedTitle}>{messages.name}</Text>
                        <Text style={styles.selectedDesc}>{messages.lastText}</Text>
                    </View>
                </View>
                <View>
                    <Text>{messages.lastTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    channelNameContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
      },
      groupLeft: {
        display: "flex",
        flexDirection: "row",
        gap: 7,
        alignItems: "center",
      },
      imageContainer: {
        width: 50,
        height:50,
        backgroundColor: 'gray',
        borderRadius: 50
      },
      selectedTitle: {
        fontSize: 16,
        fontWeight: "800",
      },
      selectedDesc: {
        fontSize: 13,
        fontWeight: "300",
        color: 'gray'
      },
})

export default DirectMessage;