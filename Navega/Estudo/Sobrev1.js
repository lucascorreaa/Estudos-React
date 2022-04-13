import React, { useLayoutEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {

    const route = useRoute();
    const navigation = useNavigation();

    function navegaContato() {
        navigation.navigate('Contato')
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome
        })
    }, [navigation])

    return(
        <View style={styles.container}>
            <Text>Tela Sobre</Text>
            <Text>{route.params?.email}</Text>
            <Text>{route.params?.nome}</Text>
            <Button 
            title='Tela Contato'
            onPress={ navegaContato }
            />
            <Button 
            title='Voltar tela'
            onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})