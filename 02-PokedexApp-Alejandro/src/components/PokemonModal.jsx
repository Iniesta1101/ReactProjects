import Modal from 'react-bootstrap/Modal';
import { pokemonId } from './PokemonCard';
import './PokemonCard.css';
import "bootstrap/dist/css/bootstrap.min.css";

function PokemonModal({modalShow, setModalShow, selectedPokemon, pokemons}) {
  const pokemon = pokemons[selectedPokemon - 1]

  return (
    <>
    {pokemon && (
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="example-modal-sizes-title-lg" className={`${pokemon.types[0]}`}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <p>{pokemonId(selectedPokemon)}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          
            <div className="container-fluid">
              <div className='row'>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 justify-content-center d-flex align-items-center">
                  <img src={pokemon.img} className="card-img" alt={`Imagen de ${pokemon.name}`} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 justify-content-center d-flex flex-column align-items-center">
                  <h3>{pokemon.name}</h3>
                    <div className="d-flex">
                      {pokemon.types.map((type, index) => (
                        <div className={`badge ${type}2 d-flex me-2 align-items-center mt-3`}>
                          <img src={`../src/assets/types-icons/${type}.svg`} className="type-img"/>
                          <p key={index} className="me-5 m-0 ms-2">{type}</p>
                        </div> 
                      ))}
                    </div>
                </div>
              </div>
              <div className='row'>
                <Boton name={"Stats"} type={pokemon.types[0]} pokemon={pokemon}></Boton>
                <Boton name={"algo"} type={pokemon.types[0]} pokemon={pokemon}></Boton>
                <Boton name={"algo"} type={pokemon.types[0]} pokemon={pokemon}></Boton>
                <Boton name={"algo"} type={pokemon.types[0]} pokemon={pokemon}></Boton>
              </div>
            </div>
          
          
        </Modal.Body>
      </Modal>
      )}
    </>
  );
}

export default PokemonModal;

function Boton({name, type, pokemon}){
  return( 
  <div key={pokemon.id} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-4 justify-content-center d-flex">
    <button type="button" className={`${type} btn btn-lg btn-block`}>{name}</button>
  </div>
  )
}