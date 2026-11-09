import { useEffect } from "react"
import { Link } from "react-router-dom"

const company = {
  name: "Ebaniscana, S.L.",
  taxId: "B88341516",
  address: "Calle Piñuecar, 2, 28021 Madrid, España",
  email: "info@ebaniscana.com",
  website: "https://www.ebaniscana.com",
}

const pages = {
  legal: {
    title: "Aviso legal",
    sections: [
      {
        title: "Titular del sitio web",
        paragraphs: [
          `${company.name} (NIF: ${company.taxId}), con domicilio en ${company.address}, es titular del sitio web ${company.website}.`,
          <>Contacto: <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>.</>,
        ],
      },
      {
        title: "Objeto y condiciones de uso",
        paragraphs: [
          "Este sitio ofrece información sobre los servicios de carpintería y ebanistería de Ebaniscana y permite contactar para solicitar información o presupuestos. La información publicada es general y no constituye una oferta contractual.",
          "El usuario se compromete a utilizar el sitio de forma lícita, sin perjudicar su funcionamiento ni los derechos de terceros. Ebaniscana podrá actualizar los contenidos y limitar temporalmente el acceso por mantenimiento o seguridad.",
        ],
      },
      {
        title: "Propiedad intelectual e industrial",
        paragraphs: [
          "Los contenidos del sitio, incluidos textos, marcas, diseños y fotografías, están protegidos por la normativa aplicable. No se autoriza su reproducción o explotación sin permiso de sus titulares, salvo los usos permitidos por ley. Los contenidos de terceros pertenecen a sus respectivos titulares.",
        ],
      },
      {
        title: "Responsabilidad y enlaces",
        paragraphs: [
          "Se procura mantener la información actualizada, pero no se garantiza que esté libre de errores o interrupciones. Los enlaces y servicios de terceros se ofrecen por conveniencia; sus responsables aplican sus propias condiciones y políticas.",
          "Este aviso se rige por la legislación española. Cualquier controversia se resolverá ante los juzgados y tribunales que resulten competentes conforme a la normativa aplicable, incluidos los derechos imperativos de consumidores y usuarios.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    sections: [
      {
        title: "Responsable del tratamiento",
        paragraphs: [
          `${company.name} (NIF: ${company.taxId}), ${company.address}. Puedes contactar con el responsable en ${company.email}.`,
        ],
      },
      {
        title: "Datos, finalidades y base jurídica",
        paragraphs: [
          "Si envías el formulario de contacto, trataremos el nombre, correo electrónico, teléfono, ciudad y contenido de tu mensaje para responder a tu consulta y, cuando corresponda, preparar un presupuesto. La base jurídica es la aplicación de medidas precontractuales solicitadas por ti.",
          "También se tratan los datos técnicos necesarios para servir y proteger el sitio (por ejemplo, registros de seguridad y dirección IP) con la finalidad de mantener su disponibilidad, prevenir abusos y atender obligaciones legales, sobre la base del interés legítimo y, cuando proceda, del cumplimiento de obligaciones legales.",
          "No uses el formulario para enviar datos especialmente protegidos ni información de otras personas que no sea necesaria para tu consulta.",
        ],
      },
      {
        title: "Destinatarios y servicios externos",
        paragraphs: [
          "El formulario utiliza EmailJS para remitir la consulta al correo de Ebaniscana. El mapa de Google Maps se carga únicamente después de aceptar las cookies opcionales. Las imágenes pueden servirse desde Cloudinary y el sitio está alojado en Vercel. Estos proveedores pueden tratar datos técnicos como la dirección IP para prestar sus servicios; consulta sus políticas y condiciones.",
          "El uso de proveedores situados fuera del Espacio Económico Europeo puede implicar transferencias internacionales. En tal caso, el proveedor y el responsable deben aplicar las garantías exigidas por la normativa vigente.",
        ],
      },
      {
        title: "Conservación",
        paragraphs: [
          "Conservaremos los datos de la consulta durante el tiempo necesario para responderla y gestionar la relación precontractual. Después, podrán mantenerse bloqueados durante los plazos necesarios para atender responsabilidades legales. Los registros técnicos se conservarán solo durante el tiempo necesario para seguridad y operación.",
        ],
      },
      {
        title: "Tus derechos",
        paragraphs: [
          <>Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento o portabilidad escribiendo a <a className="underline" href={`mailto:${company.email}`}>{company.email}</a>. También puedes reclamar ante la Agencia Española de Protección de Datos (<a className="underline" href="https://www.aepd.es/" target="_blank" rel="noreferrer">AEPD</a>). Responderemos en los plazos legales y podremos pedir información para verificar tu identidad.</>,
          "El envío de una consulta no autoriza el uso de tus datos para publicidad. No se realizan decisiones automatizadas con efectos jurídicos.",
        ],
      },
      {
        title: "Seguridad y cambios",
        paragraphs: [
          "Se aplican medidas técnicas y organizativas razonables para proteger la información. Ningún sistema de transmisión o almacenamiento puede garantizar seguridad absoluta. Esta política puede actualizarse para reflejar cambios legales o técnicos.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos y condiciones",
    sections: [
      {
        title: "Alcance",
        paragraphs: [
          "Estos términos regulan el acceso y uso de este sitio informativo de Ebaniscana, S.L. El sitio no permite comprar productos ni formalizar contratos en línea. Las consultas y solicitudes de presupuesto no constituyen una aceptación de pedido ni una oferta vinculante.",
        ],
      },
      {
        title: "Uso del sitio",
        paragraphs: [
          "El usuario se compromete a proporcionar información veraz al contactar, no utilizar el formulario con fines ilícitos y no intentar alterar, interrumpir o acceder sin autorización a los sistemas del sitio.",
          "Ebaniscana puede modificar el contenido, las funcionalidades o estos términos. Las modificaciones serán aplicables desde su publicación y no limitarán los derechos reconocidos por normas imperativas.",
        ],
      },
      {
        title: "Presupuestos y contratación",
        paragraphs: [
          "Los servicios, disponibilidad, precios, plazos, materiales y condiciones de cualquier trabajo se concretarán individualmente y, en su caso, en un presupuesto o contrato separado. La contratación solo se produce mediante aceptación expresa de las condiciones comerciales correspondientes.",
        ],
      },
      {
        title: "Contenido y responsabilidad",
        paragraphs: [
          "Los textos e imágenes se ofrecen con fines informativos. Se prohíbe su reutilización sin autorización de sus titulares. Ebaniscana no garantiza la disponibilidad ininterrumpida del sitio y no será responsable en los términos permitidos por ley por daños derivados de usos indebidos o fallos de terceros.",
          "Estos términos se rigen por la legislación española, sin perjuicio de los derechos irrenunciables de consumidores y usuarios y de las reglas legales de competencia judicial.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    sections: [
      {
        title: "Qué tecnologías utilizamos",
        paragraphs: [
          "Este sitio no utiliza cookies propias de analítica o publicidad. Guarda en el almacenamiento local del navegador la preferencia que eliges en el aviso de cookies (clave «ebaniscana-cookie-consent») para recordar si aceptaste o rechazaste las cookies opcionales.",
          "Google Maps puede utilizar cookies o tecnologías similares y comunicar datos técnicos a Google. El mapa integrado solo se carga después de que aceptes las cookies opcionales. Si las rechazas, el mapa no se carga; puedes abrir Google Maps mediante el enlace que se muestra en su lugar.",
          "El servicio de envío del formulario, EmailJS, puede tratar datos técnicos necesarios para entregar el mensaje. Consulta su política de privacidad para más información.",
        ],
      },
      {
        title: "Cómo cambiar tu elección",
        paragraphs: [
          <>Puedes cambiar o retirar tu elección en cualquier momento con el enlace «Configurar cookies» del pie de página. También puedes borrar los datos del sitio desde la configuración de tu navegador. La retirada no afecta a los tratamientos realizados antes de cambiar la elección.</>,
        ],
      },
      {
        title: "Información de terceros",
        paragraphs: [
          <>Los servicios externos se rigen por las políticas de sus proveedores: <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google</a>, <a className="underline" href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">EmailJS</a> y <a className="underline" href="https://cloudinary.com/privacy" target="_blank" rel="noreferrer">Cloudinary</a>. Las tecnologías y condiciones de estos servicios pueden cambiar.</>,
        ],
      },
    ],
  },
}

function LegalPage({ type }) {
  const page = pages[type]

  useEffect(() => {
    document.title = `${page.title} | Ebaniscana`
  }, [page.title])

  return (
    <article className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 text-left text-[#1f2933]">
      <nav aria-label="Ruta" className="mb-6 text-sm text-gray-600">
        <Link to="/" className="underline">Inicio</Link> / {page.title}
      </nav>
      <h1 className="mb-3 text-4xl font-bold">{page.title}</h1>
      <p className="mb-10 text-sm text-gray-600">Última actualización: 9 de noviembre de 2026</p>
      <div className="space-y-9">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>
            <div className="space-y-3 leading-7 text-gray-700">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

export default LegalPage
