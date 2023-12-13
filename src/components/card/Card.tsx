import { View, StyleSheet, Text, TouchableOpacityProps} from "react-native"

type Props = {
  data:Pokemon[];
}& TouchableOpacityProps


export default function Card({data, ...rest} : Props){
    return(
      <View>
        {data.map((item)=>{
            return(
              <View style= {styles.container}>
                  <Text>{item.name}</Text>
              </View>
            )
        })}
      </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius:20,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:'#808080',
      margin: 20,
      padding:30, 
      
    },
    title:{
      backgroundColor: '#808080',
      borderRadius:50,
      margin: 20,
      padding:20, 
    }
  
    
  });