import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './GameStatus.jsx'
export default function Board(){
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <div className="alert alert-info text-center" role="alert" id="status"><h1>Es el turno del Jugador X</h1></div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton1"></button>
                        
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton2"></button>
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton3"></button>

                        <div className="w-100"></div> 

                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton4"></button>
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton5"></button>
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton6"></button>

                        <div className="w-100"></div> 

                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton7"></button>
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton8"></button>
                        <button type="button" className="btn btn-outline-dark m-2 square" id="boton9"></button>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}