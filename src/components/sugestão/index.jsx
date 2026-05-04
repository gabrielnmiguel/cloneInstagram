import { useState } from "react"
import './style.css'

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
            <div className="perfil">
                <img className="photo" src={props.foto} alt={props.nome}></img>
                <p>{props.nome}</p>
                </div>
                <button onClick={Follow}>{seguirText}</button>
        </div>
    )
} 
