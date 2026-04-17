import { Link } from "react-router-dom"

function SobreNosotros() {

  const bloques = [
    {
      titulo: "Experiencia y Profesionalidad",
      imagen: "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776436199/P1010092_JPG_ehekjx.avif",
      texto: "Ebaniscana es una empresa situada en Madrid con vocación internacional. Contamos con profesionales altamente cualificados y con amplia experiencia en carpintería y ebanistería."
    },
    {
      titulo: "Calidad y Presupuesto",
      imagen: "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776436198/P1010264_JPG_c8haal.avif",
      texto: "Ofrecemos servicios integrales de diseño, fabricación y montaje. Siempre con un presupuesto claro y cumpliendo plazos establecidos."
    },
    {
      titulo: "Asesoramiento Personalizado",
      imagen: "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776436200/Catas_2_JPG_tyj810.avif",
      texto: "Acompañamos al cliente desde el primer momento, ofreciendo soluciones adaptadas y garantizando resultados de máxima calidad."
    }
  ]

  const cifras = [
    { numero: "+20", label: "Años de experiencia" },
    { numero: "+500", label: "Proyectos completados" },
    { numero: "100%", label: "Madera certificada" },
    { numero: "+50", label: "Clientes satisfechos" }
  ]

  return (
    <>

      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/da5rambq9/image/upload/v1776431995/le_dome_7_dibpdy.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-[#1f2933]/70" />
        <div className="relative text-center text-white px-6">
          <p className="text-[#C89B6D] uppercase tracking-widest text-sm mb-3">Quiénes somos</p>
          <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#8B5A2B] uppercase tracking-widest text-sm mb-3">Nuestra historia</p>
          <h2 className="text-3xl font-bold text-[#1f2933] mb-6">
            Artesanos de la madera desde hace más de 20 años
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Realizamos proyectos de ebanistería y carpintería a medida: mobiliario, armarios, cocinas,
            puertas y estructuras especiales. Trabajamos únicamente con maderas certificadas
            y apostamos por la sostenibilidad en cada proyecto.
          </p>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="bg-[#1f2933] py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {cifras.map((cifra, index) => (
            <div key={index}>
              <p className="text-5xl font-bold text-[#C89B6D] mb-2">{cifra.numero}</p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{cifra.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUES */}
      <section className="bg-[#F8F6F3] py-20">
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-[#8B5A2B] uppercase tracking-widest text-sm text-center mb-3">Por qué elegirnos</p>
          <h2 className="text-4xl font-bold text-center text-[#1f2933] mb-12">Nuestros valores</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {bloques.map((bloque, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={bloque.imagen}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1f2933]/20" />
                </div>

                <div className="p-6">
                  <div className="w-10 h-1 bg-[#C89B6D] mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-[#1f2933]">{bloque.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{bloque.texto}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#8B5A2B] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Hablamos de tu proyecto?</h2>
        <p className="text-white/80 mb-8">Cuéntanos qué necesitas y te asesoramos sin compromiso.</p>
        <Link
          to="/contacto"
          className="bg-white text-[#8B5A2B] px-8 py-3 rounded-lg font-bold hover:bg-[#F8F6F3] transition inline-block"
        >
          Contactar
        </Link>
      </section>

    </>
  )
}

export default SobreNosotros