import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Photos from './components/Photos'
import Built from './components/Built'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <header>
    <Header />
    <Hero />
    </header>
    <main>
    <Photos />
    <Built />
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  )
}

export default App
