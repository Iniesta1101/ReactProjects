import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react';

export default function PokemonCard(){
    const [pokemons, setPokemons] = useState([]);
    async function datosPokemon(nombre){
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        let datosPokemon = await pokemon.json();
        return datosPokemon;
    }
    useEffect(() => {
        async function getPokemons(){
            let kanto = await fetch("https://pokeapi.co/api/v2/pokedex/kanto");
            let datos = await kanto.json();
            let listaPokemons = [];
            for(const entrada of datos.pokemon_entries){
                listaPokemons.push(await datosPokemon(entrada.pokemon_species.name))
            }
            setPokemons(listaPokemons)
        }
        getPokemons()
    }, [])
    return <>{
        pokemons.map(pokemon => <p>{pokemon.name}</p>)
    }
    
  </>
    
}