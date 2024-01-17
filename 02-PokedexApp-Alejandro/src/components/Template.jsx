import "bootstrap/dist/css/bootstrap.min.css";
import PokemonCard from './PokemonCard.jsx';

export default function Template(){
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <PokemonCard/>
                </div>
            </div>
        </>
    )
}