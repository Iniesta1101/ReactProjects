import {View} from 'react-native'

//Representa cada celda del tablero
export function Square({tamaño, colores}){
    return(
        <View style = {{...styles.square, height: tamaño, width: tamaño, backgroundColor: colores[0], borderColor: colores[1]}}></View>
    )
}

const styles = {
    square: {
        borderWidth: 1.9,
        margin: 0,
        padding: 0
    }
}