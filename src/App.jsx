import { useState } from 'react'
import './reset.css'
import './App.css'



// import Sidebar from './components/navigate/index.jsx'
// import Story from './components/story/Story.jsx'
import { Sidebar as Side } from './components/navigate/index'
import {Post} from './components/post/index'
import { FloatMessagens } from './components/floatMessages/index'
import { Footer } from './components/footer/index'

function App() {


  return (
    <>
      <header>
        <Side />


      </header>
      <div className='allPageContent'>
        <main className='primaryContent' >
          <section className='stories'>

          </section>
          <section className='pageContent'>

            <Post></Post>
          </section>


          <FloatMessagens />
        
        </main>

        <section className='thirdJunction'>
          <section className='accountSection'>

          </section>

          <section className='suggestionSection'>


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
