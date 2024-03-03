import { View, StyleSheet, Text} from 'react-native';
import { Colors, Fonts } from '../styles'

//Pantalla de gameover, incluye los puntos conseguidos durante la partida
export function Gameover({puntos}){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>GAME OVER</Text>
                <Text style={styles.text}>Puntos: {puntos}</Text>
            </View>
        )
    

    
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300
    },
    text: {
        fontSize: Fonts.fontSizes.extraLarge,
        color: Colors.colors.texto,
        fontFamily: Fonts.fonts.medium,
        fontStyle: Fonts.fonts.italic,
        fontWeight: Fonts.fonts.bold
    },
   
})
