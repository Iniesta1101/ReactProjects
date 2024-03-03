import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Colors, Fonts } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Board } from './components/Grid';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'
import {useState } from 'react';
// Pantalla de inicio
//Cuando le da a boton de start comienza el juego
export default function App() {
  const [start, setStart] = useState(false)

  handleStart = () => {
    setStart(true)
  }
  if(start){
    return (
      <LinearGradient
        colors={[Colors.colors.fondo, Colors.colors.fondo2]}
        style={styles.gradientBackground}>
        <View style={styles.container}>
          <Board />
        </View>
      </LinearGradient>
  
    );
  }else{
    return(
      <ImageBackground source={require('./assets/tetris.jpg')} style={styles.gradientBackground} resizeMode="cover">
        <View style={styles.container2}>
          <TouchableOpacity onPressIn = {handleStart} >
            <AntDesign name="play" size={100} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: Constants.statusBarHeight / 1.6,
    width: '100%',
    height: '100%',
  },
  container2: {
    paddingTop: Constants.statusBarHeight,
    padding: Constants.statusBarHeight / 1.6,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 215,
  },
  gradientBackground: {
    width: '100%',
    height: '100%'
  },
});
