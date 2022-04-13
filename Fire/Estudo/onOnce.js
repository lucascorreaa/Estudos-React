import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View,
 } from 'react-native';
 import firebase from './src/firebaseConnection';

console.disableYellowBox=true;

export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(() => {

    async function dados(){

      //Olheiro da nossa database
      await firebase.database().ref('usuarios/2').on('value', (snapshot) => {
        setNome(snapshot.val().nome)
        setIdade(snapshot.val().idade)
      });

      // await firebase.database().ref('nome').once('value', (snapshot) => {
      //   setNome(snapshot.val());
      // })


      //Criar nó
      // await firebase.database().ref('tipo').set('Vendedor')

      //Remove um nó
      // await firebase.database().ref('tipo').remove();

      //inserir
      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'jose',
      //   cargo: 'Programador Junior'
      // });
      
      //update
      // await firebase.database().ref('usuarios').child(3)
      // .update({
      //   nome: 'Jose Augusto'
      // });

    }

    dados();
    
      
  }, []);

 

  return(
    <View style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}>Ola {nome}</Text>
      <Text style={{fontSize: 25}}>Idade {idade}</Text>
    </View>
  );
}