import { StyleSheet, Text, View } from "react-native";

const ChannelName = ({title, description, notfication}:{title:string, description:string, notfication?: number}) => {
    return (
        <View style={styles.channelNameContainer}> 
            <View style={styles.groupLeft}>
                <Text style={styles.icon} >#</Text>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            { notfication && <View style={styles.notification}>
                <Text style={styles.notText}>{notfication}</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    channelNameContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderLeftWidth: 4,
        borderLeftColor: 'orange',
        marginVertical: 15
    },
    groupLeft: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        fontWeight: '700'
    },
    title: {
        fontSize: 16,
        fontWeight: '800'
    },
    description: {
        fontSize: 13,
        fontWeight: '300',
        color: 'gray'
    },
    notification: {
        backgroundColor: 'orange',
        borderRadius: 50,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
    notText: {
        color: '#fff',
        fontSize: 20
    }

})

export default ChannelName;