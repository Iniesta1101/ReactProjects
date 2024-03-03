import "bootstrap/dist/css/bootstrap.min.css";

//Componente que muestra la descripcion del pokemon
export default function About({pokemon}){
    return(<>
        <dl className="row">
            <dt className="col-sm-3">Pokemon Description</dt>
            <dd className="col-sm-9">{pokemon.description}</dd>

            <dt className="col-sm-3">Species</dt>
            <dd className="col-sm-9">{pokemon.specie}</dd>

            <dt className="col-sm-3">Height</dt>
            <dd className="col-sm-9">{pokemon.height}</dd>

            <dt className="col-sm-3">Weight</dt>
            <dd className="col-sm-9">{pokemon.weight}</dd>

            <dt className="col-sm-3">Abilities</dt>
            <dd className="col-sm-9">
                {pokemon.abilities.map(habilidad => <p key={habilidad} >{habilidad}</p>)}
            </dd>
            
            <dt className="col-sm-3">Capture Zone</dt>
            <dd className="col-sm-9">
                {pokemon.zonaCapturas.map(zona => <p key={zona} >{zona}</p>)}
            </dd>
        </dl>
    
    </>)
}