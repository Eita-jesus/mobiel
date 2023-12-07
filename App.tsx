import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import Card from './src/components/card/Card';
import InputData from './src/components/inputData/inputData';
import Btn from './src/components/btn/Btn'
import Teste from './src/screens/Teste';
import Venda from './src/screens/Venda';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';

type StackNavigatorParamsList = {
  Home: undefined; 
  Teste:undefined;
  Venda:undefined;
};

const Stack = createStackNavigator<StackNavigatorParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title:'Tela teste'}}></Stack.Screen>
        <Stack.Screen name='Teste'component={Teste}></Stack.Screen>
        <Stack.Screen name='Venda'component={Venda}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor: '#ffffff',
    justifyContent:'center',
    alignItems:'center',

  }
});
