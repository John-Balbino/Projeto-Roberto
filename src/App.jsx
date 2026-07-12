import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './assets/components/header'
import {Home} from './assets/components/home'
import { Institucional } from './assets/components/institucional'
import {Area} from './assets/components/area'
import { Publicacoes } from './assets/components/publicacoes'
import { Contato } from './assets/components/contato'

import { MobileFooterMenu } from './assets/components/navbar2'
import { Footer } from './assets/components/footer'

import './assets/css/App.css'
import './assets/css/index.css'


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/institucional" element={<Institucional/>} />
          <Route path="/area-de-atuacao" element={<Area/>} />
          <Route path="/publicacoes" element={<Publicacoes/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
        {/*}
        <Routes>
        <Route path="/" element={} />
        </Routes>
        */}
        <Footer/>
        <MobileFooterMenu/>
      </div>
   </Router> 
  )
}

export default App
