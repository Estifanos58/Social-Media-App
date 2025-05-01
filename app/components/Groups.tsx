import { Image, StyleSheet, Text, View } from "react-native"

interface Group {
    id: number;
    name: string;
    lastText: string,
    notification: number;
    members: {id: number, image: string} []
}

const Groups = ({group}:{group: Group}) => {
    return (
        <View style={styles.channelNameContainer}> 
            <View style={styles.groupLeft}>
                <View style={styles.imageContainer}>
                    {
                        group.members.map((mem)=>(
                            <View style={styles.image} key={mem.id}>
                                <Image />
                            </View>
                        ))
                    }
                </View>
                <View>
                    <Text style={styles.selectedTitle}>{group.name}</Text>
                    <Text style={styles.selectedDesc}>{group.lastText}</Text>
                </View>
            </View>
            <View style={styles.notification}>
                <Text style={styles.notText}>{group.notification}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    channelNameContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
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
      selectedTitle: {
        fontSize: 16,
        fontWeight: "800",
      },
      selectedDesc: {
        fontSize: 13,
        fontWeight: "300",
        color: 'gray'
      },
      notification: {
        backgroundColor: "orange",
        borderRadius: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 35,
        height: 35,
      },
      notText: {
        color: "#fff",
        fontSize: 20,
      },
      image: {
        width:50,
        height:50,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 999,
        marginLeft: -15,
      },
      imageContainer: {
        display: 'flex',
        flexDirection: 'row',
      }

})

export default Groups;