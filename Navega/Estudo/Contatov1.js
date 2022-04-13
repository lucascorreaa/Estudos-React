import React from "react";
import { View, Text, Button } from "react-native";

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato() {

    const navigation = useNavigation();

    function handleHome(){
        navigation.dispatch(StackActions.popToTop())
    }

    return(
        <View>
            <Text>Tela Contato</Text>
            <Button 
            title="Voltar home"
            onPress={handleHome}
            />
        </View>

    )
}