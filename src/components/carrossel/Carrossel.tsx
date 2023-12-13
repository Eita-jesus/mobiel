import {Text, View, StyleSheet, TouchableOpacityProps, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import bullets from '../../services/bullets';
import imageFundo from '../../../assets/minion.jpg';


type Props = {
    data:Pokemon[];
  }& TouchableOpacityProps
  
  export default function Carrossel({data, ...rest} : Props){
      
          const poke = data.map((item)=>{
              return item
          })

    return(
        <View>
            <Carousel 
                containerCustomStyle={ {overflow:'visible' }}
                data={poke}
                renderItem={({item})=> {
                        return(
                            <View style={styles.itemView}>

                                <ImageBackground source={imageFundo} 
                                style={styles.backgroudPng}
                                blurRadius={0.90}//deixa a imagem desfocada
                                >
                                    <Text style={styles.backgroudText}>{item.name}</Text>
                                </ImageBackground>
                            </View>
                        )}}  
                    
                inactiveSlideOpacity={0.75}//opacidade de itens inativos
                inactiveSlideScale={0.77}//tamanho dos itens inativos
                sliderWidth={500}//tamanho dos Slides
                itemWidth={200}//tamanho do item
                slideStyle={{display:'flex',alignItems:'center'}}
                
            />
          
        </View>
    );
}



const styles = StyleSheet.create({
    itemView:{
        backgroundColor:'white',
        height:300,
        width:200,
        borderRadius:20, 
        padding:1, 
    },

    backgroudPng:{
        resizeMode:'cover',
        flex:1,
        alignItems:'center',    
        justifyContent: "center",
        position: 'absolute',
        borderRadius:50,
        width: '100%',
        height: '100%', 
    },

    backgroudText:{
        color:'white',
        fontSize:20,

    },

});