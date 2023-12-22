import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Ganar from './GameStatus.jsx'
import Square from './Square.jsx';
import {useState} from 'react';


export default function Board(){
    const[xIsNext, setX] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function empates(squares){
        return squares.every((square) => square !== null);
    }
    function handleClick(i){
        if(squares[i] || Ganar(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "❌";
        }else{
            nextSquares[i] = " 🔵"
        }
        setSquares(nextSquares);
        setX(!xIsNext);
    }
    const reiniciar = () => {
        setSquares(Array(9).fill(null));
        setX(true);
    }
    const ganador = Ganar(squares);
    const empate = empates(squares);
    let status;
    if(ganador !== null){
        status = "Ha ganado "+ganador;
    }else if(empate){
        status = "Empate";
    }else{
        status = "Es el turno del jugador "+(xIsNext ? "❌" : " 🔵");
    }
    
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <div className="alert alert-info text-center status" role="alert"><h1>{status}</h1></div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-center">
                            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-center">
                            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-wrap justify-content-center">
                        <button type="button" className="btn btn-outline-dark m-3" onClick= {reiniciar}>Reiniciar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}