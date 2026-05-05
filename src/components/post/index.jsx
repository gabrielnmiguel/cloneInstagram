import './style.css'



import { IonIcon } from '@ionic/react';
import { ellipsisHorizontal, ellipsisHorizontalOutline, ellipsisHorizontalSharp } from 'ionicons/icons';
import { person, personOutline, personSharp } from 'ionicons/icons';
import { volumeHigh, volumeHighOutline, volumeHighSharp } from 'ionicons/icons';
import { volumeMute, volumeMuteOutline, volumeMuteSharp } from 'ionicons/icons';
import {heart, heartOutline, heartSharp} from 'ionicons/icons';
import { chatbubble, chatbubbleSharp, chatbubbleOutline } from 'ionicons/icons';
import { sync, syncOutline, syncSharp } from 'ionicons/icons';
import { airplane, airplaneOutline, airplaneSharp } from 'ionicons/icons';
import { bookmark, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

// import { imagemPost } from '../../imgs/imagemPost.jpeg';



export function Post(props){

    return (
        <section className='allPost'>

            <section className='postFirstPiece'>
                <section className='imageSection'>
                    {/* <figure>
                        <img className='image' src='' alt="" />
                        <figcaption></figcaption>
                    </figure> */}

                    <section className='publisherInformation'>
                        <section>


                            <section className='perfilImage'>
                                <figure>
                                    <img src="" alt="" srcset="" />
                                    <figcaption></figcaption>
                                </figure>
                                
                            </section>
                            <section className='postPublisherInformation'>
                                <p>
                                    <a className='publisherUsername' href="#">publisherUsername</a>
                                    <a className='publicationTime' href="#">horas</a></p>
                                <p className='postAssets'></p>

                            </section>

                            <section className='moreOptionsSection'>
                                <IonIcon className='moreOptions' icon={ellipsisHorizontalOutline}></IonIcon>

                            </section>
                        </section>

                        <section className='markersProfilesSection'>
                            <IonIcon className='markersProfiles' icon={personOutline}></IonIcon>

                        </section>
                        <section className='audioStatusSection'>
                            <IonIcon className='audioStatus' icon={volumeHighOutline}></IonIcon>

                        </section>

                    </section>

                </section>




            </section>

            <section className='postSecondPiece'>   

            </section>

        </section>

    )


}