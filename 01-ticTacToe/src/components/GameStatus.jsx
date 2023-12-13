export default function Pulsar({id}){
   {let ganar = [];
    function turnoXO(ganar){
        let x = 1;
        let o = 2;
        let turno = 1;

        if(turno %2==0){
            return "X"
        }else{
            return "O"
        }   
        turno++;
    }
    const boton = document.getElementById(id);
    boton.addEventListener("click",turnoXO(ganar));

}
}

function ganar(){

}