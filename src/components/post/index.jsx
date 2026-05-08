import './style.css'
import { useState } from 'react';

import { IonIcon } from '@ionic/react';

import { ellipsisHorizontalOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';
import { volumeHighOutline } from 'ionicons/icons';
import { heartOutline } from 'ionicons/icons';
import { chatbubbleOutline } from 'ionicons/icons';
import { syncOutline } from 'ionicons/icons';
import { paperPlaneOutline } from 'ionicons/icons';
import { bookmarkOutline } from 'ionicons/icons';

import imagemPost from '../../imgs/imagemPost.jpeg';
import imagePerfil from '../../imgs/imagePerfil.png';

export function Post(props) {

    const [comentario, setComentario] = useState("");
    const [aparecerComentario, setAparecerComentario] = useState(false);

    const [listaComentarios, setListaComentarios] = useState([
        "Muito top 🔥",
        "Post incrível 👏"
    ]);

    function adicionarComentario() {

        if (comentario.trim() === "") return;

        setListaComentarios([...listaComentarios, comentario]);

        setComentario("");
    }

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
                                    <img className='perfilImageItem' src={imagePerfil} alt="" />
                                    <figcaption></figcaption>
                                </figure>

                            </section>

                            <section className='postPublisherInformation'>
                                <p>
                                    <a className='publisherUsername' href="#">gabrielmiguel__</a>
                                    <a className='publicationTime' href="#">7h</a>
                                </p>

                                <p className='postAssets'>
                                    <a href="https://www.youtube.com/watch?v=8qPTWzyVjKg">
                                        Original audio
                                    </a>
                                </p>

                            </section>

                            <section className='moreOptionsSection'>
                                <IonIcon
                                    className='moreOptions'
                                    icon={ellipsisHorizontalOutline}
                                />
                            </section>

                        </section>

                        <section className='bottomItems'>

                            <section className='markersProfilesSection'>
                                <IonIcon
                                    className='markersProfiles'
                                    icon={personOutline}
                                />
                            </section>

                            <section className='audioStatusSection'>
                                <IonIcon
                                    className='audioStatus'
                                    icon={volumeHighOutline}
                                />
                            </section>

                        </section>

                    </section>

                </section>

            </section>

            <section className='postSecondPiece'>

                <section className='interactionIcons'>

                    <section className='interactionIconsFirstPart'>

                        <section className='heartIcon'>
                            <IonIcon
                                className='heart'
                                icon={heartOutline}
                            />

                            <p className='value'>{100}</p>
                        </section>

                        <section
                            className='chatbubbleIcon'
                            onClick={() => setAparecerComentario(true)}
                        >
                            <IonIcon
                                className='chatbubble'
                                icon={chatbubbleOutline}
                            />

                            <p className='value'>
                                {listaComentarios.length}
                            </p>
                        </section>

                        <section className='syncIcon'>
                            <IonIcon
                                className='sync'
                                icon={syncOutline}
                            />

                            <p className='value'>{50}</p>
                        </section>

                        <section className='paperPlaneIcon'>
                            <IonIcon
                                className='paperPlane'
                                icon={paperPlaneOutline}
                            />
                        </section>

                    </section>

                    <section className='interactionIconsSecondPart'>
                        <section className='bookmarkIcon'>
                            <IonIcon
                                className='bookmark'
                                icon={bookmarkOutline}
                            />
                        </section>
                    </section>

                </section>

                <section className='postInfo'>

                    <section className='likes'>
                        <p className='likesP'>
                            like by <span>williamG</span> and <span>100</span>
                            <span> others</span>
                        </p>
                    </section>

                    <section className='description'>
                        <p>
                            username verifictionIcon Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit.
                        </p>
                    </section>

                </section>

            </section>

            {/* CAIXA DE COMENTÁRIOS */}

            {
                aparecerComentario && (

                    <section className='comentariosModal'>

                        <section className='comentariosBox'>

                            <div className='comentariosTop'>

                                <h2>Comentários</h2>

                                <button
                                    onClick={() => setAparecerComentario(false)}
                                >
                                    X
                                </button>

                            </div>

                            <section className='listaComentarios'>

                                {
                                    listaComentarios.map((item, index) => (
                                        <p key={index}>
                                            <strong>usuario:</strong> {item}
                                        </p>
                                    ))
                                }

                            </section>

                            <section className='adicionarComentario'>

                                <input
                                    type="text"
                                    placeholder='Digite um comentário'
                                    value={comentario}
                                    onChange={(e) =>
                                        setComentario(e.target.value)
                                    }
                                />

                                <button onClick={adicionarComentario}>
                                    Enviar
                                </button>

                            </section>

                        </section>

                    </section>

                )
            }

        </section>
    );
}