
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Conversor from './src/conversor';

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=c70e1f52dc4107436b76

class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" /> 
        <Conversor moedaA="EUR" moedaB="BRL" /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})

export default App