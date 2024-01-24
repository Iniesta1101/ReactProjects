import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react';
import './PokemonCard.css';
import Button from 'react-bootstrap/Button';
import PokemonModal from "./PokemonModal";

export default function PokemonCard({pokemonBuscado}){
    const [pokemons, setPokemons] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    async function datosPokemon(nombre){
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        let datosPokemon = await pokemon.json();
        
        const types = datosPokemon.types.map(tipo => tipo.type.name);
        const abilities = datosPokemon.abilities.map(habilidad => habilidad.ability.name);

        return {
            id: datosPokemon.id,
            name: datosPokemon.name,
            img: datosPokemon.sprites.other.dream_world.front_default,
            types: types,
            height: datosPokemon.height,
            weight: datosPokemon.weight,
            abilities: abilities,
            

        };
    }
    useEffect(() => {
        async function getPokemons(){
            let kanto = await fetch("https://pokeapi.co/api/v2/pokedex/kanto");
            let datos = await kanto.json();
            let listaPokemons = [];

            for(const entrada of datos.pokemon_entries){
                let pokemon = await datosPokemon(entrada.pokemon_species.name);
                if (pokemonBuscado==null || pokemon.name.toLowerCase().includes(pokemonBuscado.toLowerCase()) || pokemon.id == pokemonBuscado) {
                    listaPokemons.push(pokemon);
                }
            }
            setPokemons(listaPokemons);
        }
        getPokemons()
    }, [pokemonBuscado])

    const handleClick = (id) => {
        setSelectedPokemon(id);
        setModalShow(true)
    }
    return <>{
        
        pokemons.map(pokemon => 
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 justify-content-center d-flex align-items-center mt-5" key={pokemon.id}>
                <Button className="boton" onClick={() => handleClick(pokemon.id)}>
                    <div key={pokemon.id} className={`card card-shadow ${pokemon.types[0]}`} style={{ width: '18rem' }}>
                        <img src={pokemon.img} className="card-img-top card-img mx-auto mt-3" alt={`Imagen de ${pokemon.name}`}></img>
                        <div className="card-body">
                            <h3 className="card-title">{pokemon.name}</h3>
                            <p>{pokemonId(pokemon.id)}</p>
                            <div className="d-flex">
                                {pokemon.types.map((type, index) => (
                                    <div className={`badge ${type}2 d-flex me-2 align-items-center`}>
                                        <img src={`../src/assets/types-icons/${type}.svg`} className="type-img"/>
                                        <p key={index} className="me-4 m-0 ms-2">{type}</p>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </div>
                </Button>
            </div> 
        )
    }
    
    <PokemonModal modalShow={modalShow} setModalShow={setModalShow} selectedPokemon={selectedPokemon} pokemons={pokemons}></PokemonModal>
  </>
    
}

export function pokemonId(id){
    if (id < 10) {
        return "#00" + id;
    } else if (id < 100) {
        return "#0" + id;
    } else {
        return "#"+id;
    }
}