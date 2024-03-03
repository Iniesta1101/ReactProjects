import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

//Botones para controlar el movimiento de las piezas
export function Controles({ onLeftPress, onRotatePress, onRightPress, onDownPress }){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPressIn={onLeftPress}>
                <Feather name="arrow-left-circle" size={80} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPressIn={onRightPress}>
                <Feather name="arrow-right-circle" size={80} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPressIn={onDownPress}>
                <Feather name="arrow-down-circle" size={80} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPressIn={onRotatePress}>
                <Feather name="rotate-cw" size={80} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
})