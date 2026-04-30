import { useState } from "react"
 
export default function Sugest(props){
    const [seguirText, setSeguirText] = useState('Seguir');
 
    function Follow(){
        if (seguirText === 'Seguir') {
 
            setSeguirText('Seguindo');
        } else {
            setSeguirText("Seguir");
        }
    }
 
    return (
        <div className="sugest">
            <div>
                <img className="photo" src={props.foto} alt={props.nome}></img>
                <p>{props.nome}</p>
                <button onClick={Follow}>{seguirText}</button>
            </div>
        </div>
    )
}
