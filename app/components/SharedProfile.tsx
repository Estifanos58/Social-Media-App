import { Image, StyleSheet, Text, View } from "react-native"

export const SharedProfile = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.imageContainer}>
                    {/* <Image source={}/> */}
                </View>
                <View style={styles.profileNameContainer}>
                    <Text style={styles.ProfileName}>KaiMesh HQ</Text>
                    <Text style={styles.profileGroup}>Marketing Team</Text>
                </View>
            </View>
            <View>
                <Image style={styles.navImage} source={require('@/assets/icons/three-dots.png')}/>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    imageContainer: {
        borderRadius: 8,
        width:50,
        height: 50,
        backgroundColor: 'gray',
    },
    profileContainer: {
        display:'flex',
        gap:10,
        flexDirection:'row',
        alignItems:'center',
    },
    profileNameContainer: {
        display: "flex",
        flexDirection: 'column',
    },
    ProfileName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    profileGroup: {
        fontSize: 12,
        fontWeight: '300',
        color: 'gray',
    },
    navImage: {
        width: 10,
        height: 25
    }

})