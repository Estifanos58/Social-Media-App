import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import SearchBox from "../components/shared/Search"
import Icon  from "react-native-vector-icons/Feather"
import { Link } from "expo-router"
import { useState } from "react"
import { Header } from "../components/Header"

const horizontalScroll = [
    {
        id: 1,
        name: "All",
        link: '#/Home'
    },
    {
        id: 2,
        name: "Message",
        link: '#/Notification'
    },
    {
        id: 3,
        name: "Channels",
        link: '#/Profile'
    },
    {
        id: 4,
        name: "Files",
        link: '#/Search'
    },
    
    {
        id: 5,
        name: "Files",
        link: '#/Search'
    },
]


const  Search = () => {
    const [selected, setSelected] = useState(horizontalScroll[0].id)
    return (
        <>
        <SafeAreaView>
            {/* Nav */}
            <View style={styles.searchBarContainer}>
                {/*  */}
                <View>
                    <Icon size={20} name="home" />
                </View>
                {/* Search */}
                <SearchBox placeholder="Search in KaiMesh"/>
            </View>
            {/* Horizontal scroll */}
            <View >
                <FlatList showsHorizontalScrollIndicator={false} style={styles.horizontalSlideController} data={horizontalScroll} keyExtractor={(item)=> item.id.toString()} horizontal={true} renderItem={({item})=> (
                    // <Link href={`#${item.link}`}>
                        <TouchableOpacity onPress={()=> setSelected(item.id)} style={selected === item.id ? styles.navCompSelect : styles.navComp}>
                            <Text style={selected === item.id ? styles.navTextSelect :  styles.navText}>{item.name}</Text>
                        </TouchableOpacity>
                    // </Link>
                    
                )}/>
            </View>
            {/* Main Body */}
            <View style={styles.mainContainer}>
                 {/* Recent Search */}
                 <Header title="recent searches"/>

            </View>
           
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        paddingRight: 50,
        backgroundColor: 'white',
        gap: 10
    },
    horizontalSlideController: {
        backgroundColor: 'white',
        padding:10
    },
    navComp: {
        marginHorizontal: 6,
        borderRadius: 18,
        padding:10,
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E7EB'
    },
    navText: {
        color :'#1E3652',
        fontSize: 16
    },
    navCompSelect: {
        marginHorizontal: 6,
        borderRadius: 18,
        padding:10,
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDA301'
    },
    navTextSelect: {
        color :'#fff',
        fontSize: 16
    },
    mainContainer: {
        padding: 15
    }
})

export default Search