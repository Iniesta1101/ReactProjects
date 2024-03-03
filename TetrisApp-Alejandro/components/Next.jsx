import {Text, StyleSheet, View} from 'react-native'
import {Colors, Fonts} from '../styles'
import { Square } from './Square';

const ROW = 2;
const COLUMN = 4; 

//Pieza que saldrá una vez haya caído la otra pieza
class Piece{
    constructor(nextPiece){
        this.board = Array(ROW).fill("").map(() => new Array(COLUMN).fill(0));
        this.shape = nextPiece;
        this.generatePieces()
    }

    generatePieces() {
        const shape = this.shape
        this.piece = {
          x: 0,
          y: 0,
          shape
        }
        for(let y = 0; y < shape.length; y++){
            for(let x = 0; x < shape[0].length; x++){
                const newY = this.piece.y + y
                const newX = this.piece.x + x
                this.board[newY][newX] = shape[y][x]
            }
        }
      }
}



export function Next({nextPiece}){
  const piece = new Piece(nextPiece); 
    
  //Colores de la pieza
  function color(i, j) {
    switch (piece.board[i][j]) {
      case 0:
        return [Colors.colors.nextTrasparent ,Colors.colors.nextTrasparent];
      case 1:
        return [Colors.colors.piezaI, Colors.colors.piezaIborde];
      case 2: 
        return [Colors.colors.piezaJ, Colors.colors.piezaJborde];
      case 3: 
        return [Colors.colors.piezaL, Colors.colors.piezaLborde];
      case 4:
        return [Colors.colors.piezaS, Colors.colors.piezaSborde];
      case 5:
        return [Colors.colors.piezaT, Colors.colors.piezaTborde];
      case 6: 
        return [Colors.colors.piezaZ, Colors.colors.piezaZborde];
      case 7:
        return [Colors.colors.piezaO, Colors.colors.piezaOborde];
    default:
        return [Colors.colors.nextTrasparent, Colors.colors.nextTrasparent];
    }
  } 
    return(
        <>
        <View style={styles.nextContainer}>
            <View style={styles.display}>
                <Text style={styles.next}>Next: </Text>
                <View style={styles.container}>
                    {piece.board.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                    {row.map((_, index) => (
                        <Square key={`${rowIndex}-${index}`} tamaño={15} colores={color(rowIndex, index)} />
                    ))}
                    </View>
                ))}
                </View>
            </View> 
        </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    nextContainer: {
        flex:1
    },
    next: {
        fontSize: Fonts.fontSizes.large,
        fontFamily: Fonts.fonts.medium,
        color: Colors.colors.black,
        fontStyle: Fonts.fonts.italic,
        fontWeight: Fonts.fonts.bold,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        marginLeft: 5
      },
      row: {
        flexDirection: 'row',
      },
      display:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 20
      }
});