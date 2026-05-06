import './style.css'



import { IonIcon } from '@ionic/react';
import { ellipsisHorizontal, ellipsisHorizontalOutline, ellipsisHorizontalSharp } from 'ionicons/icons';
import { person, personOutline, personSharp } from 'ionicons/icons';
import { volumeHigh, volumeHighOutline, volumeHighSharp } from 'ionicons/icons';
import { volumeMute, volumeMuteOutline, volumeMuteSharp } from 'ionicons/icons';
import { heart, heartOutline, heartSharp } from 'ionicons/icons';
import { chatbubble, chatbubbleSharp, chatbubbleOutline } from 'ionicons/icons';
import { sync, syncOutline, syncSharp } from 'ionicons/icons';
import { paperPlane, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import { bookmark, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

import imagemPost  from '../../imgs/imagemPost.jpeg';
import imagePerfil from '../../imgs/imagePerfil.png';



export function Post(props){

    return (
        <section className='allPost'>

            <section className='postFirstPiece'>
                <section className='imageSection'>
                    <figure>
                        <img className='postImage' src={imagemPost} alt="" />
                        <figcaption></figcaption>
                    </figure>

                    <section className='publisherInformation'>
                        <section className='topItems'>
                            <section className='perfilImage'>
                                <figure>
                                    <img className='perfilImageItem' src={imagePerfil} alt="" srcset="" />
                                    <figcaption></figcaption>
                                </figure>

                            </section>
                            <section className='postPublisherInformation'>
                                <p>
                                    <a className='publisherUsername' href="#">gabrielmiguel__</a>
                                    <a className='publicationTime' href="#">7h</a>
                                </p>
                                <p className='postAssets'>
                                    <a href="https://www.youtube.com/watch?v=8qPTWzyVjKg">Original audio</a>
                                s</p>

                            </section>

                            <section className='moreOptionsSection'>
                                <IonIcon className='moreOptions' icon={ellipsisHorizontalOutline}></IonIcon>

                            </section>

                        </section>

                        <section className='bottomItems'>
                            <section className='markersProfilesSection'>
                                <IonIcon className='markersProfiles' icon={personOutline}></IonIcon>

                            </section>
                            <section className='audioStatusSection'>
                                <IonIcon className='audioStatus' icon={volumeHighOutline}></IonIcon>

                            </section>

                        </section>

                    </section>

                </section>


            </section>

            <section className='postSecondPiece'>   
                <section className='interactionIcons'>
                    <section className='interactionIconsFirstPart'>
                        <section className='heartIcon'>
                            <IonIcon className='heart' icon={heartOutline} />
                            <p className='value'>{100}</p>

                        </section>
                        <section className='chatbubbleIcon'>
                            <IonIcon className='chatbubble' icon={chatbubbleOutline} />
                            <p className='value'>{200}</p>

                        </section>
                        <section className='syncIcon'>
                            <IonIcon className='sync' icon={syncOutline} />
                            <p className='value'>{50}</p>

                        </section>
                        <section className='paperPlaneIcon'>
                            <IonIcon className='paperPlane' icon={paperPlaneOutline} />

                        </section>
                        

                    </section>

                    <section className='interactionIconsSecondPart'>
                        <section className='bookmarkIcon'>
                            <IonIcon className='bookmark' icon={bookmarkOutline}></IonIcon>

                        </section>


                    </section>

                </section>

                <section className='postInfo'>
                    <section className='likes'>
                        <p className='likesP'>like by <span>{'williamG'}</span> and <span>{100}</span> <span>others</span></p>

                    </section>
                    <section className='description'>
                        <p>{'username'} {'verifictionIcon'} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem repellat dolore molestiae error quam minus natus magnam quibusdam sunt id! Nam repudiandae iure eveniet impedit excepturi! Nihil neque praesentium doloremque. #teste #teste #teste #teste</p>

                    </section>


                </section>

            </section>

        </section>

    )


}