import './App.css'
import  Story from './components/story/Story'
import Sugest from  './components/sugestão/index.jsx'
import Will from './assets/eu carton.png'
import Gabi from './assets/salsicha.jpg'
import Grazim from './assets/valente.jpg'
import Meu from './assets/meu.jpg'
import Jeto from './assets/JETP.jpg'


function App() {


  return (
    <>
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
    <Sugest foto='src/perfilSemFoto.jpg' nome='Gabrielle Rodrigues'></Sugest>
    <Sugest foto='src/perfilSemFoto.jpg' nome='Davi Brito'></Sugest>
    <Sugest foto='src/perfilSemFoto.jpg' nome='Ana T.'></Sugest>
    <Sugest foto='src/perfilSemFoto.jpg' nome='Marcos Henrique'></Sugest>
    <Sugest foto='src/perfilSemFoto.jpg' nome='Thiago Mariano'></Sugest>
    </>
  )
}

export default App
