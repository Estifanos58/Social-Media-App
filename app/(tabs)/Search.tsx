import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import SearchBox from "../components/shared/Search"
import Icon  from "react-native-vector-icons/MaterialIcons"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Header } from "../components/Header"
import { horizontalScroll, recentSearch, seggested } from "@/constants/data"
import Groups from "../components/Groups"
import ChannelName from "../components/ChannelName"



const  Search = () => {
    const [selected, setSelected] = useState(horizontalScroll[0].id)
    return (
        <>
        <SafeAreaView>
            {/* Nav */}
            <View style={styles.searchBarContainer}>
                {/*  */}
                <View>
                    <Icon onPress={()=> router.back()} size={20} style={{fontWeight: '800'}} color={'gray'} name="arrow-back" />
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
                 <View style={styles.recentMainCont}>
                    {recentSearch.map((search)=>(
                        <View style={styles.recentComp}> 
                            <View style={styles.recentNameCont}>
                                <Icon name="history" size={20} color={'#949494'}/>
                                <Text style={styles.recentText}>{search.name}</Text>
                            </View>
                            <Icon name="close" size={20} color={'#949494'}/>
                            
                        </View>
                    ))}
                 </View>
                 {/* Suggested */}
                 <Header title="suggested"/>
                 {
                    seggested.map((item)=> (
                        <ChannelName key={item.id} channel={item}/>
                    ))
                 }

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
    },
    recentMainCont: {
        marginVertical: 5,
        marginBottom: 10
    },
    recentComp :{
        padding: 10,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10
    },
    recentNameCont: {
        display: 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        gap: 10
    },
    recentText: {
        color: '#1E3652',
        fontSize: 16
    }

})

export default Search