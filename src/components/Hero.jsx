import { Link } from "react-router-dom"

function Hero() {
  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        {/* IMAGEN DE FONDO */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/da5rambq9/image/upload/w_1920,h_1080,c_fill/v1774893952/0ea8a5_bbbb665b98b84dfa86813f1dfa9150b4_mv2_bk1frc.jpg)"
          }}
        />

        {/* OVERLAY OSCURO */}
        <div className="absolute inset-0 bg-[#1f2933]/70" />

        {/* CONTENIDO */}
        <div className="relative text-center text-white max-w-3xl px-6">

          <p className="text-[#C89B6D] uppercase tracking-widest text-sm mb-4">
            Carpintería & Ebanistería Artesanal
          </p>

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Mobiliario a medida <br /> hecho para durar
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Diseñamos y fabricamos piezas únicas en madera combinando
            técnicas tradicionales con estética contemporánea.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              to="/referencias"
              className="bg-[#8B5A2B] text-white px-8 py-3 rounded-lg hover:bg-[#C89B6D] transition"
            >
              Ver nuestros trabajos
            </Link>
            <Link
              to="/contacto"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1f2933] transition"
            >
              Contacto
            </Link>
          </div>

        </div>

      </section>

      {/* FRANJA DE VALORES */}
      <section className="bg-[#1f2933] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div>
            <p className="text-4xl mb-3">🪵</p>
            <h3 className="text-lg font-bold text-[#C89B6D] mb-2">Madera Natural</h3>
            <p className="text-gray-400 text-sm">Trabajamos con maderas nobles seleccionadas para garantizar calidad y durabilidad.</p>
          </div>

          <div>
            <p className="text-4xl mb-3">✏️</p>
            <h3 className="text-lg font-bold text-[#C89B6D] mb-2">Diseño Personalizado</h3>
            <p className="text-gray-400 text-sm">Cada pieza se diseña desde cero adaptándose al espacio y al cliente.</p>
          </div>

          <div>
            <p className="text-4xl mb-3">🤝</p>
            <h3 className="text-lg font-bold text-[#C89B6D] mb-2">Trato Cercano</h3>
            <p className="text-gray-400 text-sm">Te acompañamos en todo el proceso, desde el diseño hasta la instalación.</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN SOBRE NOSOTROS BREVE */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#8B5A2B] uppercase tracking-widest text-sm mb-3">Quiénes somos</p>
            <h2 className="text-4xl font-bold text-[#1f2933] mb-6">
              Artesanos con más de 20 años de experiencia
            </h2>
            <p className="text-gray-600 mb-6">
              En Ebaniscana somos especialistas en carpintería y ebanistería artesanal.
              Combinamos técnicas tradicionales con diseño moderno para crear mobiliario
              a medida que se adapta a cada espacio y cliente.
            </p>
            <Link
              to="/sobrenosotros"
              className="bg-[#1f2933] text-white px-6 py-3 rounded-lg hover:bg-[#C89B6D] transition inline-block"
            >
              Conocenos mejor
            </Link>
          </div>

          <img
            src="https://res.cloudinary.com/da5rambq9/image/upload/v1774894680/0ea8a5_9a8538e08dd34eea985c0311c82e49ef_mv2_gj8jyt.gif"
            className="rounded-xl shadow-lg w-full object-cover"
          />

        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN */}
      <section className="bg-[#8B5A2B] text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-lg mb-8 text-white/80">Cuéntanos qué necesitas y te hacemos un presupuesto sin compromiso.</p>
        <Link
          to="/contacto"
          className="bg-white text-[#8B5A2B] px-8 py-3 rounded-lg font-bold hover:bg-[#F8F6F3] transition inline-block"
        >
          Pedir presupuesto
        </Link>
      </section>

    </>
  )
}

export default Hero