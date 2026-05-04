
import './style.css'

import { IonIcon } from '@ionic/react';
import { logoInstagram } from 'ionicons/icons'
import { home, homeOutline, homeSharp } from 'ionicons/icons';
import { play, playOutline, playSharp } from 'ionicons/icons';
import { paperPlane, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import { search, searchOutline, searchSharp } from 'ionicons/icons';
import { compass, compassOutline, compassSharp} from 'ionicons/icons';
import { heart, heartOutline, heartSharp } from 'ionicons/icons';
import { add, addOutline, addSharp } from 'ionicons/icons'
import { statsChart, statsChartOutline, statsChartSharp } from 'ionicons/icons';
import { menu, menuOutline, menuSharp } from 'ionicons/icons';
import { shapes, shapesOutline, shapesSharp } from 'ionicons/icons'
import { person, personOutline, personSharp } from 'ionicons/icons'

export function Item(props){

    return (
        <li className={props.item}>
            <a className={props.itemAClass} href={props.itemASrc}>
                <IonIcon className={props.itemIconClass} icon={props.itemIcon} />
                {/* <IonIcon icon={heart} /> */}
                <p className={props.itemPClass}>{props.itemP}</p>
            </a>
        </li>

    )
}

export function Sidebar() {

    return (

        <section className='sidebar'>
            <section className='logoSection'>
                <a className='logoUrl' href="#">
                    <IonIcon className='logo' icon={logoInstagram} />
                    <p className='logoP'>instagram</p>
                </a>

            </section>

            <section className='optionsSection'>
                <ul>
                    <Item 
                    item='initialPage items'
                    itemAClass='initialPageA itemsA' 
                    itemASrc='#'
                    itemIconClass='homeSharp icons'
                    itemIcon={homeSharp}
                    itemPClass='pName'
                    itemP='página Inicial' 
                    />
                    <Item 
                    item='reels items'
                    itemAClass='reelsA itemsA' 
                    itemASrc='#'
                    itemIconClass='playOutline icons'
                    itemIcon={playOutline}
                    itemPClass='pName'
                    itemP='reels' 
                    />
                    <Item 
                    item='mensagens items'
                    itemAClass='mensagensA itemsA' 
                    itemASrc='#'
                    itemIconClass='paperPlaneOutline icons'
                    itemIcon={paperPlaneOutline}
                    itemPClass='pName'
                    itemP='mensagens' 
                    />

                    <Item 
                    item='pesquisar items'
                    itemAClass='pesquisarA itemsA' 
                    itemASrc='#'
                    itemIconClass='searchOutline icons'
                    itemIcon={searchOutline}
                    itemPClass='pName'
                    itemP='pesquisar' 
                    />

                    <Item 
                    item='explorar items'
                    itemAClass='explorarA itemsA' 
                    itemASrc='#'
                    itemIconClass='compassOutline icons'
                    itemIcon={compassOutline}
                    itemPClass='pName'
                    itemP='explorar' 
                    />                   

                    <Item 
                    item='notificacoes items'
                    itemAClass='notificacoesA itemsA' 
                    itemASrc='#'
                    itemIconClass='heartOutline icons'
                    itemIcon={heartOutline}
                    itemPClass='pName'
                    itemP='notificaçoes' 
                    />                 

                    <Item 
                    item='criar items'
                    itemAClass='criarA itemsA' 
                    itemASrc='#'
                    itemIconClass='addOutline icons'
                    itemIcon={addOutline}
                    itemPClass='pName'
                    itemP='criar' 
                    />         

                    <Item 
                    item='estatísticas items'
                    itemAClass='estatisticasA itemsA' 
                    itemASrc='#'
                    itemIconClass='addOutline icons'
                    itemIcon={statsChartSharp}
                    itemPClass='pName'
                    itemP='dashboard' 
                    />
                    <Item 
                    item='perfil items'
                    itemAClass='perfilA itemsA' 
                    itemASrc='#'
                    itemIconClass='personSharp icons'
                    itemIcon={personSharp}
                    itemPClass='pName'
                    itemP='perfil' 
                    />                           

                </ul>

            </section>

            <section className='plusSection'>
                <a class="plusSectionA" href="">
                    <IonIcon className="menuOutline icons" icon={menuOutline} />
                    <p className="classP" >mais</p>
                </a>
                <a class="plusSectionA" href="">
                    <IonIcon className="shapesOutline icons" icon={shapesOutline} />
                    <p className='classP'>meta</p>
                </a>

            </section>

        </section>

    );


}