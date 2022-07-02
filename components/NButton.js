import React from "react"
import{ View,Text,StyleSheet,TouchableOpacity} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"

function NButton(){
    return (
        <View style={styles.container}>
            {/*oNE bUTTON*/}
            <view style={styles.buttonContainer}>
                <TouchableOpacity
                     style={styles.button}>
                    <FontAwesome name={"video-camera"} size={23} color={"#efefef"}/>
                </TouchableOpacity>
                <Text style={styles.menuText}>New Meeting</Text>

            </view>
        </View>
    )
}

export default NButton

const styles = StyleSheet.create({
    container:{

    },
    button:{
        width:50,
        height:50,
        backgroundColor:"blue",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    }

})