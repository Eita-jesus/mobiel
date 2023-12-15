import { StyleSheet, Text, View , ScrollView,Image, TouchableOpacity, } from 'react-native';
import { useNavigation, NavigationProp} from '@react-navigation/native'; 
import { getAllPokemon } from '../../controllers/pokemonControllers';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Bullets from '../../components/bullets/Bullets';
import Carrossel from '../../components/carrossel/Carrossel';
import Card from '../../components/card/Card';
import imageFundo from '../../../assets/minion.jpg';

export default function Home(){
    
    const { navigate } = useNavigation<NavigationProp<any>>();
    //Primeiro a variavel que vai guardar dos dados, a segunda é quem vai jogar os dados

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(()=>{
      getAllPokemon().then(setPokemons).catch((err)=>{console.log()})

    })
    
    return(
      
      <ScrollView>
          <View style={styles.viewstyle} >

          <Header />

          <ScrollView horizontal={true}>
              <Bullets></Bullets>
         
          </ScrollView>
          <Carrossel data={pokemons}/>


          <Text>teste1</Text>
          <Text>teste123</Text>
          {/* <InputData/> */}

          <TouchableOpacity style= {styles.btnText} onPress={() => navigate('Teste')}>
            <Text>Ir para a tela teste</Text>
          </TouchableOpacity>
          
          <Card data = {pokemons}/>

          {/* <FlatList 

            data={pokemons}
            keyExtractor={pokemons => pokemons.name}
            renderItem={({item: pokemons}) =>(
            <Card data ={pokemons}/>
          )}/> */}


          <Image source={imageFundo} />
          </View>
      </ScrollView>
    

    )

    }
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          borderColor:'#808080'
          
        },
        viewstyle:{
          flex:1
        },
        scrollNotView:{
          padding: 15, 
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