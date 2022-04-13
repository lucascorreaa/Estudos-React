import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,

} from 'react-native';

import firebase from '../../services/firebaseConnections';

export default function Login({changeStatus}) {

    const [type, setType] = useState('login');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
    
    if(type === 'login'){
        //aqui é o login
    const user = firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user)=> {
        changeStatus(user.user.uid)
      })
      .catch((err)=>{
        console.log(err);
        alert('Ops parece que deu algum erro.')
        return;
      })
    }else{
        //cadastro
        const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user)=>{
          changeStatus(user.user.uid)
        })
        .catch((err)=> {
          console.log(err);
          alert('Ops parece que algo está errado');
          return
        })
    }

    }

  return(
    <SafeAreaView style={styles.container}>
      
        <TextInput 
        style={styles.input}
        placeholder='Seu email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <TextInput 
        style={styles.input}
        placeholder='Sua senha'
        value={password}
        onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity 
        style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ae6f2' : '#141414'}]}
        onPress={handleLogin}
        >
            <Text style={styles.loginText}>
                {type === 'login' ? 'Acessar' : 'Cadastrar'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
            <Text style={{textAlign: 'center'}}>
                {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
                </Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f2f6fc',
    paddingHorizontal: 10,

  },
  input: {
      marginBottom: 10,
      backgroundColor: '#FFF',
      borderRadius: 4,
      height: 45,
      padding: 10,
      borderWidth: 1,
      borderColor: '#141414',
  },
  handleLogin: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      marginBottom: 10, 

  },
  loginText: {
      color: '#FFF',
      fontSize: 17,
  }
})