import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, Button, StyleSheet} from "react-native";
import React from "react";
import img from "../../../assets/download.png";
import { TextInput } from "react-native-gesture-handler";

export default function UserConfig(){
    return(
        <SafeAreaView>
            <Image source={img} ></Image>
            <Text style={styles.textStilo}>Name</Text>
            <TextInput style={styles.textinput}></TextInput>

            <Text style={styles.textStilo}>Sobrenome</Text>
            <TextInput style={styles.textinput}></TextInput>

            <Text style={styles.textStilo}>Bio</Text>
            <TextInput style={styles.textinput}></TextInput>

            <Text style={styles.textStilo}>Nova senha</Text>
            <TextInput style={styles.textinput}></TextInput>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    textinput:{
        borderColor:'#808080',
        minHeight:30,
        minWidth:30,
        borderRadius:45,
        backgroundColor:'#808080',
        maxWidth:380,
        justifyContent:"center"        


    },
    textStilo:{
        fontSize:15,
        padding:4,
        paddingHorizontal:10,
        fontWeight:'bold',
    }

});