import { useState } from "react"
import PokemonCard from "./PokemonCard";


export default function Buscador(){
    const[busqueda, setBusqueda] = useState("");

    const buscar = (e) =>{
        setBusqueda(e.target.value)
    }

    return<>
        <div>
            <div className="row">
                <div style={{ marginLeft: '35px' }} className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-4 col-xxl-3 d-flex mt-5">
                    <input type="text" className="form-control form-control-lg" placeholder="🔎" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={buscar}/>
                </div>
            </div>
            <div className="row">    
                <PokemonCard pokemonBuscado={busqueda}/>
            </div>
        </div>
        
    </>
}

