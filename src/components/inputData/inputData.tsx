import { View, Text,TextInput,StyleSheet } from 'react-native';
import { useState } from 'react';

export default function(){
    const [inputValue, setInputValue] = useState('')

    return(
        <View>
            <Text style = {styles.input}>Esse é um teste de Input</Text>
            <TextInput style = {styles.inputnew} placeholder='Digite um texto'
            value= {inputValue}
            onChangeText={(text) => setInputValue(text)}
            >
                
            </TextInput>

            <Text>{inputValue}</Text>

        </View>


    )
}

const styles = StyleSheet.create({
    input:{
        borderRadius:50, 
        backgroundColor: '#d3d3d3',
        maxWidth:300, 

    },
    inputnew:{
        borderRadius: 50,
        color:'#ffffff',
        backgroundColor:'#fa7f72',
        // maxHeight: 100, 
        // maxWidth: 100, 
        padding: 20, 
        margin: 20, 
    },
})