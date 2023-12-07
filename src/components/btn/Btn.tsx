import { StyleSheet, Text, View , ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';



export default function App() {
  return (
    <View>
        <TouchableOpacity style={style.btnText}>
            <Text>Botão Teste</Text>
        </TouchableOpacity>
    </View>
    )
}

const style = StyleSheet.create({
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




  

