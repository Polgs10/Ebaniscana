import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CookieConsent from "./components/CookieConsent"

import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import Mobiliario from "./pages/Mobiliario"
import Referencias from "./pages/Referencias"
import SobreNosotros from "./pages/SobreNosotros"
import Contacto from "./pages/Contacto"
import LegalPage from "./pages/Legal"
import NotFound from "./pages/NotFound"

const CONSENT_STORAGE_KEY = "ebaniscana-cookie-consent"

function App() {
  const [cookieConsent, setCookieConsent] = useState(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return savedConsent === "accepted" || savedConsent === "rejected" ? savedConsent : null
  })
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  const chooseCookieConsent = (consent) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent)
    setCookieConsent(consent)
    setShowCookieBanner(false)
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/mobiliario" element={<Mobiliario />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route
              path="/contacto"
              element={
                <Contacto
                  cookieConsent={cookieConsent}
                  onAcceptOptionalCookies={() => chooseCookieConsent("accepted")}
                />
              }
            />
            <Route path="/aviso-legal" element={<LegalPage type="legal" />} />
            <Route path="/privacidad" element={<LegalPage type="privacy" />} />
            <Route path="/terminos" element={<LegalPage type="terms" />} />
            <Route path="/cookies" element={<LegalPage type="cookies" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer onManageCookies={() => setShowCookieBanner(true)} />
        <CookieConsent
          visible={cookieConsent === null || showCookieBanner}
          onChoose={chooseCookieConsent}
        />
      </div>
    </BrowserRouter>
  )
}

export default App