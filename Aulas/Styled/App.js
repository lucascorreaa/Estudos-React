import React from 'react';
import { View, Text } from 'react-native';

import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles'

export default function App(){
  return (
    <Container>
      <Titulo cor="#FF0000">Lucas Onlines</Titulo>
      <Nome>Olá Lucas!</Nome>

      <BotaoSujeito onPress={ () => alert('Clicou!') }>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>


    </Container>
  );
}
