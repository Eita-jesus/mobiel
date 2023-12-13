import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../searchBar/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';
import Bullets from '../bullets/Bullets';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 

export default function Header(){
    return(
        <SafeAreaView style={style.headerView} >
            <StatusBar style='light'/>
            <View style={style.headerTopElements}>
                <FontAwesome5 name="user-astronaut" size={24} color="black" />
                <Text>Imagem</Text>
                <Text>Imagem</Text>
                <MaterialCommunityIcons name="bell" size={24} color="black" />
            </View>
            <SearchBar/>


        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    headerView:{
        
        backgroundColor:'red',
    },
    headerTopElements:{
    
        flex: 1,
        flexDirection:'row',
        paddingVertical: 15, 
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal:15, 
        position:'relative',

    }, 

});