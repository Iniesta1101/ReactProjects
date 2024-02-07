import "bootstrap/dist/css/bootstrap.min.css";
import '../PokemonCard.css';

export default function Evolution({pokemon, pokemons}){


    return(<>
       
       <dl className="row">
        {pokemon.cadena &&
          (() => {
            const elements = [];
            for (const pokemonName in pokemon.cadena) {
              let img;
              if (pokemon.cadena.hasOwnProperty(pokemonName)) {
                for (let e of pokemons) {
                  if (e.name === pokemonName) {
                    img = e.img;
                    break;
                  }
                }
                if(img == null){
                  continue;
                }else{
                  elements.push(
                    <div key={pokemonName}>
                      <dt className="col-sm-3">Level {pokemon.cadena[pokemonName]} {pokemonName}</dt>
                      <dd className="col-sm-9">
                        <img src={img} alt={`Imagen de ${pokemonName}`} className="img" />
                      </dd>
                    </div>
                  );
                }
                
              }
            }
            return elements;
          })()}
      </dl>
    
    </>)
}