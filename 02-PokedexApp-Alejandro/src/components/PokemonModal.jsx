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
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 justify-content-center d-flex align-items-center mt-5" key={pokemon.id}>
                  <img src={pokemon.img} className="card-img-top card-img mx-auto" alt={`Imagen de ${pokemon.name}`} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 justify-content-center d-flex flex-column align-items-center mt-5" key={pokemon.id}>
                  <h3>{pokemon.name}</h3>
                    <div className="d-flex">
                      {pokemon.types.map((type, index) => (
                        <div className={`badge ${type}2 d-flex me-2 align-items-center`}>
                          <img src={`../src/assets/types-icons/${type}.svg`} className="type-img"/>
                          <p key={index} className="me-5 m-0 ms-2">{type}</p>
                        </div> 
                      ))}
                    </div>
                </div>
              </div>
            </div>
          
          
        </Modal.Body>
      </Modal>
      )}
    </>
  );
}

export default PokemonModal;