import { Rect } from 'react-native-safe-area-context';
import { StyleSheet, Text, View , ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Card from '../../components/card/Card';
import InputData from '../../components/inputData/inputData';
import Btn from '../../components/btn/Btn';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, NavigationProp} from '@react-navigation/native'; 
import Teste from '../Teste';

export default function Home(){
    
    const { navigate } = useNavigation<NavigationProp<any>>();
    
    return(

    // <SafeAreaView >
        
      <ScrollView  >

          <Text >Olá Mundo !</Text>
          <Card/>
          <InputData/>
          <TouchableOpacity style= {styles.btnText} onPress={() => navigate('Teste')}>
            <Text>Ir para a tela teste</Text>
          </TouchableOpacity>
          <Btn/>
          <Text style ={styles.title}>Olá teste de edição</Text>
          <Text style ={styles.title}>Olá teste de edição</Text>
          <StatusBar style="auto" />

      </ScrollView>

    // </SafeAreaView>

    )

    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          // alignItems: 'center',
          // justifyContent: 'center',
          borderColor:'#808080'
          
        },
        title:{
          backgroundColor: '#808080',
          borderRadius:50,
          margin: 50,
          padding:50, 
        },
      
        title1:{
          backgroundColor: '#808080',
          borderRadius:50,
          margin: 80,
          padding:80, 
        },

        btnText:{
            backgroundColor:'red',
            height:50, 
            borderRadius: 50,
            alignItems:'center',
            justifyContent:'center',
            margin:50,
            elevation:20,
                 
            },
        
        
    

})