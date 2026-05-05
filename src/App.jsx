import './App.css'
import  Story from './components/story/Story'
import Sugest from  './components/sugestão/index.jsx'
import Will from './assets/eu carton.png'
import Gabi from './assets/salsicha.jpg'
import Grazim from './assets/valente.jpg'
import Meu from './assets/meu.jpg'
import Jeto from './assets/JETP.jpg'
import Garota1 from './assets/sugestão/garota 1.jpg'
import Garota2 from './assets/sugestão/garota 2.jpg'
import Carinha1 from './assets/sugestão/carinha 1.jpg'
import Carinha2 from './assets/sugestão/carinha 2.jpg'
import Carinha3 from './assets/sugestão/carinha 3.jpg'
import photoUser from './assets/photoUser.jpg'


import { useState } from 'react'
import './reset.css'
import './App.css'



// import Sidebar from './components/navigate/index.jsx'
// import Story from './components/story/Story.jsx'
import { Sidebar as Side } from './components/navigate/index'
import {Post} from './components/post/index'
import { FloatMessagens } from './components/floatMessages/index'
import { Footer } from './components/footer/index'
import UserProfile from './components/userProfile/index.jsx'


function App() {


  return (
    <>
     {/* <div className="layout">
    <section className="inicio">

    </section>
  <section className="sugestao">

  </section>
  </div>

     */}
  
      <header>
        <Side />


      </header>
      <div className='allPageContent'>
        <main className='primaryContent' >
          <section className='stories'>

          </section>
          <section className='pageContent'>
            <Story
              fotos={Gabi}
              fotos1={Grazim}
              fotos2={Meu}
              fotos3={Jeto}
              fotos4={Will}
              title="Usuarios"
              perfil1="Gabriel"
              perfil2="Grazi"
              perfil3="iago"
              perfil4="jetomi"
              perfil5="William"
            />
            <Post></Post>
          </section>


          <FloatMessagens />
        
        </main>

        <section className='thirdJunction'>
          <section className='accountSection'>

          </section>

          <section className='suggestionSection'>
           <UserProfile photo={photoUser} name='grazielly lacerda' username='grazlacerd'></UserProfile>
            <h1>Sugestões para você</h1>
            <Sugest foto= {Garota1} nome='Gabrielle Rodrigues'></Sugest>
            <Sugest foto= {Carinha1} nome='Davi Brito'></Sugest>
            <Sugest foto= {Garota2} nome='Ana T.'></Sugest>
            <Sugest foto= {Carinha2} nome='Marcos Henrique'></Sugest>
            <Sugest foto= {Carinha3} nome='Thiago Mariano'></Sugest>

          </section>

          <footer>
            <Footer />


          </footer>

        </section>

      </div>
    </>
  );
}

export default App
