import React from "react"
import{ View, SafeAreaView, StyleSheet} from "react-native"
import ContactsMenu from "../components/ContactsMenu"
import Header  from "../components/Header"
import NButton from "../components/NButton"
import SearchBar from "../components/SearchBar"

function Home(){
    return (
        <View style={styles.container}>
            <SafeAreaView >
               <Header/>
               <SearchBar/>
               <NButton/>
               <ContactsMenu/>
            </SafeAreaView>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:"#1c1c1c",
        padding:15
    }

})