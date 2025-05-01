import { StyleSheet, Text, View } from "react-native"
import { SharedProfile } from "../components/SharedProfile"
import { Header } from "../components/Header"
import ChannelName from "../components/ChannelName"

const  Home  = () => {
    return (
        <>
        <View>
            <SharedProfile/>
            <View style={styles.mainContainer}>
                <Header title={"channels"}/>
                <ChannelName title={"general"} description={"general channel"} notfication={2}/>
                <ChannelName title={"marketing"} description={"Company discussion"} />
                <Header title="direct Messages"/>

            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    }
})

export default Home