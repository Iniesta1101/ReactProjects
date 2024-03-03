import "bootstrap/dist/css/bootstrap.min.css";

//Componente que muestra los movimientos del pokemon
export default function Moves({pokemon}){
    return(<>
        <dl className="row">
        <dt className="col-sm-3">
            {pokemon.moves.map((move, index) => <p key={index}>Level {move.level}</p>)}
            </dt>
            <dd className="col-sm-9">
                {pokemon.moves.map(move => <p key={move.name} >{move.name}</p>)}
            </dd>
        </dl>
    
    </>)
}