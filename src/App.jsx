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



function App() {


  return (
    <>
     <div className="layout">
    <section className="inicio">
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
    </section>
  <section className="sugestao">
    <Sugest foto= {Garota1} nome='Gabrielle Rodrigues'></Sugest>
    <Sugest foto= {Carinha1} nome='Davi Brito'></Sugest>
    <Sugest foto= {Garota2} nome='Ana T.'></Sugest>
    <Sugest foto= {Carinha2} nome='Marcos Henrique'></Sugest>
    <Sugest foto= {Carinha3} nome='Thiago Mariano'></Sugest>
  </section>
  </div>
    </>
    
  )
}

export default App
