import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Square } from './Square';
import { Colors } from '../styles';
import { Pieces } from './Pieces';
import { Controles } from './Bottom'
import { Top } from './Top';
import { useEffect, useState } from 'react';
import { Gameover } from './Gameover';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import { Pause } from './Pause';
import { AntDesign } from '@expo/vector-icons';

const ROWS = 20;
const COLS = 10;
const SHAPES = Pieces();

class Tetris {
  constructor() {
    this.board = Array(ROWS).fill("").map(() => new Array(COLS).fill(0));
    this.puntos = 0
    this.movimiento = 1
    this.gameOver = false
    this.velocidad = 500
    this.inicio = true
    this.shapeNext = null
    this.generatePieces()
  }
  //Se encarga de generar las piezas
  generatePieces() {
    let shape = null;
    if (this.inicio) {
      shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
      this.inicio = false
    } else {
      shape = this.shapeNext
    }
    this.shapeNext = SHAPES[Math.floor(Math.random() * SHAPES.length)]
    this.piece = {
      x: 3,
      y: 0,
      shape
    }
    if (!this.check()) {
      this.gameOver = true
    } else {
      this.place()
    }

  }

  //Se encarga de colocar la pieza en el tablero
  place({ remove = false, stick = false } = {}) {
    const { shape } = this.piece
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[0].length; x++) {
        if (shape[y][x]) {
          const newY = this.piece.y + y
          const newX = this.piece.x + x
          this.board[newY][newX] = remove ? 0 : stick ? this.board[newY][newX] + 8 : shape[y][x]
        }
      }
    }
  }

  //Revisa si la pieza se encuentra dentro de los límites del tablero
  check({ dx = 0, dy = 0, shape = this.piece.shape } = {}) {
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[0].length; x++) {
        if (shape[y][x] === 0) {
          continue
        }

        const newY = this.piece.y + y + dy
        const newX = this.piece.x + x + dx

        if (newX < 0 || newX >= COLS || newY >= ROWS) {
          return false
        }
        if (this.board[newY][newX] > 8) {
          return false
        }
      }
    }
    return true
  }

  //Limpia las lineas caundo hay una completa, y suma los puntos
  clearLines() {
    let lineas = 0
    this.board.forEach((row, index) => {
      if (row.every(cell => cell != 0)) {
        this.board.splice(index, 1)
        this.board.unshift(Array(COLS).fill(0))
        lineas++
      }
    })
    if (lineas === 4) {
      this.puntos += 800
    } else {
      this.puntos += lineas * 100
    }
    this.level()
  }

  //Aumenta la dificultad en función de los puntos
  level() {
    if (this.puntos >= 1500) {
      this.velocidad = 450
    }
    if (this.puntos > 3000) {
      this.velocidad = 400
    }
    if (this.puntos > 4500) {
      this.velocidad = 350
    }
    if (this.puntos > 6000) {
      this.velocidad = 300
    }
    if (this.puntos > 10000) {
      this.velocidad = 200
    }
    if (this.puntos > 15000) {
      this.velocidad = 100
    }
  }

  //Gira la pieza
  rotatePiece() {
    const { shape } = this.piece
    const rotatedShape = Array(shape[0].length).fill("").map(() => Array(shape.length).fill(0))
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[0].length; x++) {

        const newY = x
        const newX = shape.length - 1 - y
        if (shape[y][x]) {
          rotatedShape[newY][newX] = shape[y][x]
        }

      }
    }
    return rotatedShape
  }

  //Se encarga del movimiento de la pieza
  move({ dx = 0, dy = 0, rotate = false }) {

    const shape = rotate ? this.rotatePiece() : this.piece.shape

    const valid = this.check({ dx, dy, shape })
    if (!valid && dy) {
      this.place({ stick: true })
      this.clearLines()
      this.generatePieces()
      return
    }
    if (!valid) {
      return
    }
    this.place({ remove: true })
    this.piece.x += dx
    this.piece.y += dy
    this.piece.shape = shape
    this.place()
  }
  //Devuelve a la clase los valores de inicio. Para casos en los que el juego empieza de nuevo 
  reset() {
    this.board = Array(ROWS).fill("").map(() => new Array(COLS).fill(0));
    this.puntos = 0
    this.gameOver = false
    this.velocidad = 500
    this.inicio = true
    this.shapeNext = null
    this.movimiento = 1
    this.generatePieces()
  }
}

const tetris = new Tetris()

export function Board() {
  const [_, render] = useState({})

  //Funciones para que la pieza se mueva hacia abajo, izquierda, derecha y que rote
  const handleLeft = () => {
    tetris.move({ dx: -tetris.movimiento })
    render({})
  }

  const handleRight = () => {
    tetris.move({ dx: tetris.movimiento })
    render({})
  }

  const handleDown = () => {
    tetris.move({ dy: tetris.movimiento })
    render({})
  }

  const handleRotate = () => {
    tetris.move({ rotate: true })
    render({})
  }

  //Hace que cada cierto tiempo la pieza se mueva hacia abajo
  useEffect(() => {
    const interval = setInterval(() => {
      tetris.move({ dy: tetris.movimiento })
      render({})
    }, tetris.velocidad)
    return () => clearInterval(interval)
  }, [])

  //Colores en funcion de la pieza
  function color(i, j) {
    switch (tetris.board[i][j]) {
      case 0:
        return [Colors.colors.texto, Colors.colors.bordeGrid];
      case 1:
      case 9:
        return [Colors.colors.piezaI, Colors.colors.piezaIborde];
      case 2:
      case 10:
        return [Colors.colors.piezaJ, Colors.colors.piezaJborde];
      case 3:
      case 11:
        return [Colors.colors.piezaL, Colors.colors.piezaLborde];
      case 4:
      case 12:
        return [Colors.colors.piezaS, Colors.colors.piezaSborde];
      case 5:
      case 13:
        return [Colors.colors.piezaT, Colors.colors.piezaTborde];
      case 6:
      case 14:
        return [Colors.colors.piezaZ, Colors.colors.piezaZborde];
      case 7:
      case 15:
        return [Colors.colors.piezaO, Colors.colors.piezaOborde];
    }
  }

  //Hace que el juego vuelva a empezar
  const handleReplay = () => {
    tetris.reset()
    setPause(false);
    if (sound) {
      sound.playAsync();
    }
  }

  const [sound, setSound] = useState();
  //Suena una canción durante el juego
  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/tetris.mp3'),
        { shouldPlay: true, isLooping: true } // Establece isLooping en true para que el sonido se reproduzca en un bucle
      );
      setSound(sound);
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);


  const [pause, setPause] = useState(false);

  //Hace que el juego se pause
  const handlePause = () => {
    setPause(!pause);
    if (pause == true && sound) {
      sound.playAsync();
    }
    tetris.movimiento = 1
  }

  //Se muestra una pantalla de pausa, donde es puede volver a comenzar, o seguir 
  if(pause){
    sound.pauseAsync();
    tetris.movimiento = 0
    return (
      <>
      <Pause/>
      <TouchableOpacity onPressIn = {handlePause}>
        <AntDesign name="play" size={69} color="black" style={styles.button} />
      </TouchableOpacity>
      <TouchableOpacity onPressIn = {handleReplay}>
        <MaterialIcons name="replay" size={75} color="black" style={styles.button} />
      </TouchableOpacity>
      </>
    )
  }

  //Pantalla de gameover que te permite volver a comenzar otra partida
  if (tetris.gameOver) {
    sound.pauseAsync();
    return (
      <>
        <Gameover puntos={tetris.puntos} />
        <TouchableOpacity onPressIn={handleReplay}>
          <MaterialIcons name="replay" size={75} color="black" style={styles.button} />
        </TouchableOpacity>
      </>
    );
  }


  //Juego
  return (
    <View style={styles.container}>
        <Top puntos={tetris.puntos} next={tetris.shapeNext} pause={handlePause} />
      {tetris.board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((_, index) => (
            <Square key={`${rowIndex}-${index}`} tamaño={30} colores={color(rowIndex, index)} />
          ))}
        </View>
      ))}
      <Controles
        onLeftPress={handleLeft}
        onRightPress={handleRight}
        onRotatePress={handleRotate}
        onDownPress={handleDown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    width: 80,
    height: 70,
    marginLeft: 135,
    marginTop: 100,
  }
});



