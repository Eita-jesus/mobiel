import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Venda(){
    return(
        <View>
            <Text style={styles.textStyle}>Tela de venda</Text>
            <Image 
                style={styles.imgStyle}
                source={{uri:'https://reactnative.dev/img/tiny_logo.png',
            }}
            />



        </View>
    )
}
    const styles = StyleSheet.create({
        textStyle: {
          fontSize:20,
          fontWeight:'bold',
          color:'red',
          
        },
        imgStyle:{
            width: 50,
            height: 50,
        }
})