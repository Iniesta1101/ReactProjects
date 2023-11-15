import Button from 'react-bootstrap/Button';

export default function Casilla(turno){
    
    return(
        <>
        let usado = 0
        if(usado == 0){
            <p>Vacio</p>
        }
        <Button type="button" class="btn btn-outline-dark" onClick={boton(turno,usado)}>Light</Button>
        
        </>
    )
}
function boton(turno,usado){
    return(
        <>
            if({turno}%2==0){
                <p>X</p>
            }
            if({turno}%2!=0){
                <p>O</p>
            }
            {usado} =1
        </>
        )
}

