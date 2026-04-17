import { Link } from "react-router-dom"

function Servicios() {

  const fases = [
    {
      titulo: "Diseño",
      descripcion: "Realizamos los planos necesarios de forma que el diseño sea el óptimo y el resultado final a obtener, respecto a acabados, colores, etc., el deseado por el cliente.",
      imagen: "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776436503/ChatGPT_Image_17_abr_2026_16_32_15_kggbsn.png"
    },
    {
      titulo: "Elaboración",
      descripcion: "Nuestros profesionales altamente cualificados y experimentados realizarán los trabajos con los materiales de alta calidad acordados, utilizando las técnicas tradicionales y modernas necesarias para obtener los mejores resultados.",
      imagen: "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776436505/17_abr_2026_16_34_08_osksyc.png"
    },
    {
      titulo: "Montaje",
      descripcion: "Tenemos una gran experiencia en el montaje en obra en todo tipo de proyectos, desde superestruturas para museos o integrados en proyectos completos de construcción de viviendas, oficinas o locales comerciales.",
      imagen: "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776436620/ChatGPT_Image_17_abr_2026_16_36_50_bm5g05.png"
    }
  ]

  const servicios = [
    { icono: "🪵", titulo: "Carpintería a medida" },
    { icono: "🍳", titulo: "Fabricación de cocinas" },
    { icono: "🚪", titulo: "Armarios empotrados" },
    { icono: "🔧", titulo: "Restauración de muebles" },
    { icono: "🏠", titulo: "Puertas de madera" },
    { icono: "🪜", titulo: "Instalación de tarima" }
  ]

  return (
    <>

      {/* HERO SERVICIOS */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/da5rambq9/image/upload/v1776431994/le_dome_2_zwokpd.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-[#1f2933]/70" />
        <div className="relative text-center text-white px-6">
          <p className="text-[#C89B6D] uppercase tracking-widest text-sm mb-3">Lo que hacemos</p>
          <h1 className="text-5xl font-bold">Nuestros Servicios</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F8F6F3] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Estamos especializados en proyectos de alta calidad, a medida, por complejos que sean,
            dirigidos a particulares o estudios de arquitectura, realizando desde la fase inicial de
            diseño, pasando por una esmerada elaboración, hasta el montaje en obra.
          </p>
        </div>
      </section>

      {/* FASES */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-12">
            {fases.map((fase, index) => (
              <div key={index} className="flex flex-col">

                <p className="text-[#C89B6D] uppercase tracking-widest text-sm mb-2">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-2xl font-bold text-[#1f2933] mb-4">{fase.titulo}</h3>

                <img
                  src={fase.imagen}
                  className="w-full h-52 object-cover rounded-xl shadow mb-4"
                />

                <p className="text-gray-600 text-sm leading-relaxed">{fase.descripcion}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      {/* <section className="bg-[#F8F6F3] py-20">
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-[#8B5A2B] uppercase tracking-widest text-sm text-center mb-3">Especialidades</p>
          <h2 className="text-4xl font-bold text-center text-[#1f2933] mb-12">¿En qué podemos ayudarte?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border-l-4 border-[#C89B6D]">
                <p className="text-3xl mb-3">{servicio.icono}</p>
                <h3 className="text-xl font-semibold text-[#1f2933] mb-2">{servicio.titulo}</h3>
                <p className="text-gray-500 text-sm">Trabajos profesionales en madera con acabados de alta calidad adaptados a cada cliente.</p>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-[#1f2933] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-gray-400 mb-8">Contacta con nosotros y te hacemos un presupuesto sin compromiso.</p>
        <Link
          to="/contacto"
          className="bg-[#8B5A2B] text-white px-8 py-3 rounded-lg hover:bg-[#C89B6D] transition inline-block"
        >
          Pedir presupuesto
        </Link>
      </section>

    </>
  )
}

export default Servicios