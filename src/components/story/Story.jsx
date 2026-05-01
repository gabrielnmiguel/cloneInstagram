import './style.css'

export default function Story(props){
    return (
        <div className="container">

            <div className="imagens">

            <div className="item">
            <img src={props.fotos} alt={props.title} className="fotos" />
            <p className="perfil">{props.perfil1}</p>
            </div>

            <div className="item">
            <img src={props.fotos1} alt={props.title} className="fotos" />
            <p className="perfil2">{props.perfil2}</p>
            </div>

             <div className="item">
            <img src={props.fotos2} alt={props.title} className="fotos" />
             <p className="perfil3">{props.perfil3}</p>
             </div>

            <div className="item">
            <img src={props.fotos3} alt={props.title} className="fotos" />
             <p className="perfil4">{props.perfil4}</p>
             </div>

             <div className="item">
            <img src={props.fotos4} alt={props.title} className="fotos" />
            <p className="perfil5">{props.perfil5}</p>
            </div>

            </div>

        </div>

    )
}