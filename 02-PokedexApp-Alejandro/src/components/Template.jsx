import "bootstrap/dist/css/bootstrap.min.css";
import PokemonCard from './PokemonCard.jsx';
import './Template.css';

export default function Template(){
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                <img src="../src/assets/title.png" className="img mt-4"/>
                </div>
                
                <div className="row justify-content-center">    
                    <PokemonCard/>
                </div>
            </div>
        </>
    )
}