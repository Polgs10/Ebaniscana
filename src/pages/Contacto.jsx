import Contacto from "../components/Contacto"

function ContactoPage({ cookieConsent, onAcceptOptionalCookies }){
  return(
    <div className="flex-1 flex flex-col">
      <Contacto
        cookieConsent={cookieConsent}
        onAcceptOptionalCookies={onAcceptOptionalCookies}
      />
    </div>
  )
}

export default ContactoPage