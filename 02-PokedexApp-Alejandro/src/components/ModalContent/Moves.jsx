import "bootstrap/dist/css/bootstrap.min.css";

export default function Moves({pokemon}){
    return(<>
        <dl className="row">
        <dt className="col-sm-3">
            {pokemon.moves.map(move => <p>Level {move.level}</p>)}
            </dt>
            <dd className="col-sm-9">
                {pokemon.moves.map(move => <p>{move.name}</p>)}
            </dd>
        </dl>
    
    </>)
}