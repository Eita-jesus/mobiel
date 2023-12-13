import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 


export default function SearchBar(){
    return(
        <View style={style.searchBarContainer}>
            <Text style={style.input}>
                <Text style={style.internalInput}>SearchBar</Text>
                <Text>  icon</Text>
                <Entypo style={style.internalInput} name="magnifying-glass" size={24} color="black" />
            </Text>
            
        </View>
    );

}

const style = StyleSheet.create({
    searchBarContainer:{
        backgroundColor:'white',

    },
    input: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 45,
      },

      internalInput:{
     
      }  

});