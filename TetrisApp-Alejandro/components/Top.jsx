import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Score} from './Score'
import {Next} from './Next'
import { Feather } from '@expo/vector-icons';

//Parte donde se muestran los puntos, la siguiente pieza y el boton de pausa
export function Top({puntos, next, pause}) {

    return (
        <View style={styles.container}>
            <Score puntos = {puntos}/>
            <Next nextPiece = {next}/>
            <TouchableOpacity onPressIn = {pause}>
                <Feather name="pause-circle" size={40} color="black" />
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 15,
        marginBottom: 15
    },
});