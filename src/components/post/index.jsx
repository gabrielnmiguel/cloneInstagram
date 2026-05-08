import './style.css'
import { useState } from 'react';

import { IonIcon } from '@ionic/react';

import { 
    ellipsisHorizontalOutline, 
    personOutline, 
    volumeHighOutline, 
    heartOutline, 
    heart,
    chatbubbleOutline, 
    syncOutline, 
    paperPlaneOutline, 
    bookmarkOutline 
} from 'ionicons/icons';

import imagemPost from '../../imgs/imagemPost.jpeg';
import imagePerfil from '../../imgs/imagePerfil.png';

export function Post(props) {

    const [comentario, setComentario] = useState("");
    const [aparecerComentario, setAparecerComentario] = useState(false);
    
    const [curtido, setCurtido] = useState(false);
    const [numeroCurtidas, setNumeroCurtidas] = useState(100);

    const [listaComentarios, setListaComentarios] = useState([
        "Muito top 🔥",
        "Post incrível 👏"
    ]);

    function alternarCurtida() {
        if (curtido) {
            setNumeroCurtidas(numeroCurtidas - 1);
        } else {
            setNumeroCurtidas(numeroCurtidas + 1);
        }
        setCurtido(!curtido);
    }

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
                        
                        {/* Seção do Coração Atualizada */}
                        <section className='heartIcon' onClick={alternarCurtida} style={{ cursor: 'pointer' }}>
                            <IonIcon
                                className='heart'
                                icon={curtido ? heart : heartOutline}
                                style={{ color: curtido ? '#ed4956' : 'inherit' }}
                            />
                            <p className='value'>{numeroCurtidas}</p>
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
                            like by <span>williamG</span> and <span>{numeroCurtidas}</span>
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
            {aparecerComentario && (
                <section className='comentariosModal'>
                    <section className='comentariosBox'>
                        <div className='comentariosTop'>
                            <h2>Comentários</h2>
                            <button onClick={() => setAparecerComentario(false)}>X</button>
                        </div>

                        <section className='listaComentarios'>
                            {listaComentarios.map((item, index) => (
                                <p key={index}>
                                    <strong>usuario:</strong> {item}
                                </p>
                            ))}
                        </section>

                        <section className='adicionarComentario'>
                            <input
                                type="text"
                                placeholder='Digite um comentário'
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                            />
                            <button onClick={adicionarComentario}>Enviar</button>
                        </section>
                    </section>
                </section>
            )}
        </section>
    );
}
