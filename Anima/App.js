import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {

      LarAnimada: new Animated.Value(0),

    }

    Animated.timing(
      this.state.LarAnimada,
      {
        toValue: 100,
        duration: 5000,
      }
    ).start()

  }

 

  render(){

    let porcentagemAnimate = this.state.LarAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })
    
    return(

      <View style={styles.container}>

        <Animated.View style={{backgroundColor: '#4169E1',
                      width: porcentagemAnimate,
                      height:25}}>

        </Animated.View>


      </View>

    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
 
})

