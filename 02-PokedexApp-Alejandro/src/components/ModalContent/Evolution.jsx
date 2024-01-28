import "bootstrap/dist/css/bootstrap.min.css";

export default function Evolution({pokemon}){
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
                {pokemon.abilities.map(habilidad => <p>{habilidad}</p>)}
            </dd>
            
            <dt className="col-sm-3">Capture Zone</dt>
            <dd className="col-sm-9">
                {pokemon.zonaCapturas.map(zona => <p>{zona}</p>)}
            </dd>
        </dl>
    
    </>)
}