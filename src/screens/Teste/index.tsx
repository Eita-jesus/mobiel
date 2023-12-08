import { Rect } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp} from '@react-navigation/native'; 


export default function Teste(){
    const { navigate } = useNavigation<NavigationProp<any>>();

    return(
        <View>
            <Text style={styles.textStyle}>Olá, eu sou uma tela teste</Text>
            
            <TouchableOpacity  onPress={() => navigate('Venda')}>
                <Text>Ir para tela Venda</Text>
            </TouchableOpacity>

        </View>
    )
}
    const styles = StyleSheet.create({
        textStyle: {
          fontSize:20,
          fontWeight:'bold',
          color:'red',
          
        },
      
})



