
import './style.css';
import { IonIcon } from '@ionic/react';
import { paperPlane, paperPlaneOutline, paperPlaneSharp } from "ionicons/icons";
import { ellipsisHorizontalCircle, ellipsisHorizontalCircleOutline, ellipsisHorizontalCircleSharp } from 'ionicons/icons';


export function PerfilGroup(props){
    return(
        <>
        <IonIcon className='singlePerfil' icon={ellipsisHorizontalCircleOutline} />
        <IonIcon className='singlePerfil' icon={ellipsisHorizontalCircleOutline} />
        <IonIcon className='singlePerfil' icon={ellipsisHorizontalCircleOutline} />
        <IonIcon className='singlePerfil' icon={ellipsisHorizontalCircleOutline} />
        
        
        </>

    )
}


export function FloatMessagens(){

    return(
        <section className='floatSection'>
            <section className='logoSection'>
                <IonIcon className='logo' icon={paperPlaneOutline} />
                <p>Mensagens</p>


            </section>

            <section className='peopleSection'>
                <PerfilGroup />

            </section>



        </section>


    )


}