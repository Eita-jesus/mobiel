import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../searchBar/SearchBar';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation, NavigationProp} from '@react-navigation/native'; 
import UserConfig from '../../screens/UserConfig';


export default function Header(){
    const { navigate } = useNavigation<NavigationProp<any>>();

    return(
        <SafeAreaView style={style.headerView} >
            <StatusBar style='light'/>
            <View style={style.headerTopElements}>

                <TouchableOpacity onPress={() => navigate('UserConfig')}>
                    <FontAwesome5 name="user-astronaut" size={24} color="black" />
                </TouchableOpacity>

                <Text>Imagem1</Text>
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