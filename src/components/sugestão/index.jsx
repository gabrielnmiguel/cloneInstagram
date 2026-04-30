
export default function Sugest(props){
    return (
        <div>
            <h2>Sugestões para você</h2>
            <div>
                <img className="fotoPerfil" src={props.foto} alt={props.nome}></img>
                <p>{props.nome}</p>
                
            </div>
        </div>
    )
}