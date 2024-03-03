import Modal from 'react-bootstrap/Modal';
import { pokemonId } from './PokemonCard';
import './PokemonCard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'; 
import  Collapse  from 'react-bootstrap/Collapse'; 
import { useEffect, useState } from 'react';
import About from './ModalContent/About';
import Stats from './ModalContent/Stats';
import Moves from './ModalContent/Moves';
import Evolution from './ModalContent/Evolution';

function PokemonModal({modalShow, setModalShow, selectedPokemon, pokemons}) {
  //Pokemon seleccionado
  const pokemon = pokemons[selectedPokemon - 1]
  //Estado para saber si el collapse esta abierto o cerrado
  const [openCollapse, setOpenCollapse] = useState(null)

  useEffect(() => {
    if(!modalShow){
      setOpenCollapse(null)
    }
  }, [modalShow])

  //Funcion para abrir o cerrar el collapse
  function handleClick(id){
    setOpenCollapse((prevId) => (prevId === id ? null : id));
  }
  return (
    <>
    {pokemon && (
      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton className={`${pokemon.types[0]}`}>
          <Modal.Title id="example-modal-sizes-title-lg">
            <p>{pokemonId(selectedPokemon)}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${pokemon.types[0]}`}>
          
            <div className="container-fluid">
              <div className='row'>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 justify-content-center d-flex align-items-center">
                  <img src={pokemon.img} className="card-img" alt={`Imagen de ${pokemon.name}`} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 justify-content-center d-flex flex-column align-items-center">
                  <h3>{pokemon.name}</h3>
                    <div className="d-flex">
                      {pokemon.types.map((type, index) => (
                        <div key={index} className={`badge ${type}2 d-flex me-2 align-items-center mt-3`}>
                          <img src={`../src/assets/types-icons/${type}.svg`} className="type-img"/>
                          <p className="me-5 m-0 ms-2">{type}</p>
                        </div> 
                      ))}
                    </div>
                </div>
              </div>
              <div className='row'>
                {["ABOUT", "STATS", "MOVES", "CHAIN EVOLUTION"].map((name, index) => (
                  <Boton key={index}
                  name={name}
                  pokemon={pokemon}
                  isOpen={openCollapse === index}
                  onClick={() => handleClick(index)} id={index}
                  pokemons = {pokemons}
                  />
                ))}
              </div>
            </div>
        </Modal.Body>
      </Modal>
      )}
    </>
  );
}

export default PokemonModal;

//Collapse se abrira o cerrara dependiendo del boton que se presione
function Boton({name, pokemon, isOpen, onClick, id, pokemons}){
  let content;

  switch (id) {
    case 0:
      content = <About pokemon={pokemon} />;
      break;
    case 1:
      content = <Stats pokemon={pokemon}/>;
      break;
    case 2:
      content = <Moves pokemon={pokemon}/>
      break;
    case 3:
      content = <Evolution pokemon={pokemon} pokemons={pokemons}/>
      break;
    default:
      content = <p>Invalid button id</p>;
  }
  return(<> 
   
      <Button className="btn mt-3" onClick={onClick} variant={isOpen ? "light" : "outline-light"}>
        {name}
      </Button>
      <Collapse in={isOpen}>
        <div className="card card-body mt-2">
          {content}
        </div>
      </Collapse>
 </> 
  )
}