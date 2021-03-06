import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Run coder</Text>
      
      <FontAwesome 
      name='home'
      size={25}
      color= "#11118c"
      />

      <FontAwesome 
      name='user'
      size={25}
      color= "#54a300"
      />

      <Feather 
      name='gift'
      size={65}
      color="#7665ff"
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome 
        name='youtube'
        size={25}
        color="#fff"
        />
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnYoutube:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  btnText:{
    paddingLeft: 10,
    color: '#fff'
  }
});