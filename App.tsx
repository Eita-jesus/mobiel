import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import Card from './src/components/card/Card';
import InputData from './src/components/inputData/inputData';

export default function App() {
  return (
    //ScrollView é para arrastar para baixo é cima 

    <SafeAreaView >
      <ScrollView  >
      {/* SafeAreaView ele server para o programa não sobrepor a hora */}

          <Text >Olá Mundo !</Text>
          <Card/>
          <InputData/>
          <Text style ={styles.title}>Olá teste de edição !</Text>
          <Text style ={styles.title}>Olá teste de edição</Text>
          <Text style ={styles.title}>Olá teste de edição</Text>
          <Text style ={styles.title}>Olá teste de edição</Text>
          <Text style ={styles.title}>Olá teste de edição</Text>
          <Text style ={styles.title}>Olá teste de edição</Text>

      </ScrollView>
      <StatusBar style="auto" />

    </SafeAreaView>
    

   

  );
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




  
});
