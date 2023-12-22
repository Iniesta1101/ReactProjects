import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './GameStatus.jsx'

export default function Ganar(squares){
    const lineas = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0; i < lineas.length; i++){
        const [a,b,c] = lineas[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}