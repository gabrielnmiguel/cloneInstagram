
export default function story(props){
    return (
        <div className="container">

            <div className="imagens">
            <img src="{props.fotos}" alt="{props.title}" className="fotos" />
            <p className="perfil">{props.perfil1}</p>
            <img src="{props.fotos}" alt="{props.title}" className="fotos" />
             <p className="perfil2">{props.perfil2}</p>
            <img src="{props.fotos}" alt="{props.title}" className="fotos" />
             <p className="perfil3">{props.perfil3}</p>
            <img src="{props.fotos}" alt="{props.title}" className="fotos" />
             <p className="perfil4">{props.perfil4}</p>
            </div>


        </div>

    )
}