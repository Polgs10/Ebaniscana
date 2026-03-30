import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import Mobiliario from "./pages/Mobiliario"
import Referencias from "./pages/Referencias"
import SobreNosotros from "./pages/SobreNosotros"
import Contacto from "./pages/Contacto"
import Footer from "./components/Footer"

function App(){
  return(
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        <Navbar/>
        
        
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/mobiliario" element={<Mobiliario/>}/>
            <Route path="/referencias" element={<Referencias/>}/>
            <Route path="/sobrenosotros" element={<SobreNosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
          </Routes>
        </main>

        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App