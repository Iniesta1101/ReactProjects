import "bootstrap/dist/css/bootstrap.min.css";
import './Template.css';
import Buscador from "./Buscador.jsx";

//Componente que contiene el buscador y el titulo
export default function Template(){
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center mt-4">
                    <img src="../src/assets/title.png" className="img" alt="Pokemon"/>
                </div>
                <Buscador/>
                
            </div>
        </>
    )
}