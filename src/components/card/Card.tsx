import { View, StyleSheet, Text} from "react-native"




export default function Card(){
    return(
      <View>
        <Text>Card</Text>
      </View>      

            
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:'#808080'
      
    },
    title:{
      backgroundColor: '#808080',
      borderRadius:50,
      margin: 50,
      padding:50, 
    }
  
    
  });