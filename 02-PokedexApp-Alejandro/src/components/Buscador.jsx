import { useState } from "react"
import PokemonCard from "./PokemonCard";


export default function Buscador(){
    //Buscador de pokemons
    const[inputS, setInput] = useState("");
    const[busqueda, setBusqueda] = useState("");

    const input = (e) =>{
        setInput(e.target.value)
    }
    const buscar = () =>{
        setBusqueda(inputS)
    }
    return<>
        <div>
            <div className="row">
                <div style={{ marginLeft: '35px' }} className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-4 col-xxl-3 d-flex mt-5">
                    <input id="bucador" type="text" className="form-control form-control-lg" placeholder="🔎" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={input}/>
                    <button type="button" className="btn btn-dark p-2" onClick={buscar}>Search</button>
                </div>
            </div>
            <div className="row">    
                <PokemonCard pokemonBuscado={busqueda}/>
            </div>
        </div>
        
    </>
}

