import {StyleSheet, Text, View} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import bullets from '../../services/bullets' ;

export default function Bullets(){

    return(
        <View style={style.balletView}>
            {bullets.map((item)=>{
                return(
                    <TouchableOpacity style = {style.touchaableBtn}>
                        <Text style = {style.touchaableText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}

const style = StyleSheet.create({
    balletView:{
        flexDirection:'row',
    },
    touchaableBtn:{
        backgroundColor:'white',
        borderRadius:45,
        padding:10,
        marginHorizontal:5,
        justifyContent:'center',
        alignItems:'center'
    },
    touchaableText:{
        fontSize:15,
    },
})