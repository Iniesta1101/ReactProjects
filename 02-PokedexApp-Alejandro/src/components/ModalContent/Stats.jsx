import "bootstrap/dist/css/bootstrap.min.css";

export default function Stats({pokemon}){
    const totalStats = pokemon.stats.reduce((total, stat) => total + stat.value, 0);
    return(<>
          <dl className="row">
                {pokemon.stats.map((stat, index) => (
                    <div key={index} className="col-sm-10">
                        <dt className="col-sm-3 mt-2">{stat.name}</dt>
                        <div className="progress mt-1">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${stat.value}%` }}
                                aria-valuenow={stat.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {stat.value}%
                            </div>
                        </div>
                    </div>
                ))}
                <dt className="col-sm-3 mt-2">Total Stats</dt>
                <dd className="col-sm-9 mt-2">{parseInt(totalStats)}</dd>
            </dl>
    
    </>)
}