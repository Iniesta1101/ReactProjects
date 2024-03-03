import {Text, StyleSheet} from 'react-native'
import {Colors, Fonts} from '../styles'

//Muestra los puntos, que se van actualizando segun las lineas que hagas
export function Score({puntos}){
    return(
        <Text style = {styles.score}>Score: {puntos}</Text>
    )
}

const styles = StyleSheet.create({
    score: {
        fontSize: Fonts.fontSizes.large,
        fontFamily: Fonts.fonts.medium,
        color: Colors.colors.black,
        flex: 1,
        fontStyle: Fonts.fonts.italic,
        fontWeight: Fonts.fonts.bold
    }
});