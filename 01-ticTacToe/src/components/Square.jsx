import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './GameStatus.jsx'
export default function Square({value, onSquareClick}){
    return <button type="button" className="btn btn-outline-dark m-2 square" onClick={onSquareClick}><h1>{value}</h1></button>;
}