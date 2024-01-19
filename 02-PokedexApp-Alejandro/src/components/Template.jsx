import "bootstrap/dist/css/bootstrap.min.css";
import PokemonCard from './PokemonCard.jsx';
import './Template.css';
import Buscador from "./Buscador.jsx";

export default function Template(){
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center mt-4">
                    <img src="../src/assets/title.png" className="img"/>
                </div>
                <Buscador/>
                
            </div>
        </>
    )
}