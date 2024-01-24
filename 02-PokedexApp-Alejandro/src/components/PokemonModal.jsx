import Modal from 'react-bootstrap/Modal';
import { pokemonId } from './PokemonCard';
import './PokemonCard.css';

function PokemonModal({modalShow, setModalShow, selectedPokemon, pokemons}) {
  return (
    <>
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <p>{pokemonId(selectedPokemon)}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pokemons[selectedPokemon - 1] && (
            <img src={pokemons[selectedPokemon - 1].img} className="card-img-top card-img mx-auto mt-3" alt={`Imagen de ${pokemons[selectedPokemon - 1].name}`}/>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PokemonModal;