import { useState,useEffect } from "react"

const cloudinary = (url, transformacion) => {
  return url.replace("/upload/", `/upload/${transformacion}/`)
}

function Referencias() {

  const proyectos = [
    {
      titulo: "Le dome",
      descripcion: "Vivero de madera",
      imagenes: [
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431987/faustino_4_l81um6.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_10_xctyfo.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431997/faustino_16_cytyll.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431987/faustino_7_xh5iwc.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431987/faustino_5_hsdotm.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431987/faustino_8_ga4twq.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_14_rozwvv.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_15_b3lid4.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_12_lpdfyg.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_11_ikacwb.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431986/faustino_2_odrkvo.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431986/faustino_1_cyo6ms.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_13_qb49m7.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431988/faustino_eieblw.jpg"
      ]
    },
    {
      titulo: "Le dome",
      descripcion: "Estructura geodésica realizada en madera",
      imagenes: [
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431996/le_dome_13_ommeis.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431995/le_dome_5_tp02xq.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431995/le_dome_7_dibpdy.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431996/le_dome_8_wrkhvv.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431997/le_dome_hwluif.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431997/le_dome_16_ciortn.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431994/le_dome_1_ufcl10.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431994/le_dome_2_zwokpd.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431995/le_dome_3_edmmt7.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431996/le_dome_9_nwseiz.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431995/le_dome_6_ct8j7h.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431995/le_dome_4_qs6dxb.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431996/le_dome_10_jb76fq.jpg"
      ]
    },
    {
      titulo: "Carcabas",
      descripcion: "Escalera en espiral realizada en madera de roble y estructura metálica",
      imagenes: [
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431983/carcabas_3_lcl2xi.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431983/carcabas_hregog.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431983/carcabas_4_sa7pey.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431984/carcabas_5_c0ak4f.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431983/carcabas_2_suhhy6.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431983/carcabas_1_vn6duv.jpg"

      ]
    },
    {
      titulo: "Casa árbol",
      descripcion: "Casa en árbol realizada en madera",
      imagenes: [
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431985/casa_en_el_arbol_2_gpmiuv.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431984/casa_arbol_dgjy39.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431985/casa_en_el_arbol_4_maspls.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431985/casa_en_el_arbol_1_wqbc8l.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431986/casa_en_el_arbol_aar4dz.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/v1776431987/casa_en_el_arbol_5_cjmjju.jpg"
      ]
    },
    {
      titulo: "La finca",
      descripcion: "",
      imagenes: [
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431994/la_finca_xvrxs5.jpg",
        "https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431994/la_finca_1_ghk7oz.jpg"
      ]
    }
  ]

  const [indices, setIndices] = useState(proyectos.map(() => 0))
  const [proyectoActivo, setProyectoActivo] = useState(null)

  useEffect(() => {
    proyectos.forEach(proyecto => {
        proyecto.imagenes.forEach(url => {
        // precarga carrusel
        const img1 = new Image()
        img1.src = cloudinary(url, "w_1200,h_675,c_fill,q_auto,f_auto")

        // precarga modal 👇
        const img2 = new Image()
        img2.src = cloudinary(url, "q_auto,f_auto")
        })
    })
    }, [])

  const siguiente = (i) => {
    setIndices(prev => {
      const nuevo = [...prev]
      nuevo[i] = (nuevo[i] + 1) % proyectos[i].imagenes.length
      return nuevo
    })
  }

  const anterior = (i) => {
    setIndices(prev => {
      const nuevo = [...prev]
      nuevo[i] = (nuevo[i] - 1 + proyectos[i].imagenes.length) % proyectos[i].imagenes.length
      return nuevo
    })
  }

  return (
    <>

      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/da5rambq9/image/upload/q_auto/f_auto/v1776431996/le_dome_13_ommeis.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-[#1f2933]/70" />
        <div className="relative text-center text-white px-6">
          <p className="text-[#C89B6D] uppercase tracking-widest text-sm mb-3">Nuestro trabajo</p>
          <h1 className="text-5xl font-bold">Referencias</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-10 h-1 bg-[#C89B6D] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#1f2933] mb-4">Cada proyecto, una historia</h2>
          <p className="text-gray-500 leading-relaxed">
            Cada mueble que fabricamos nace de una conversación, una medida y una visión. 
            Aquí puedes ver algunos de los trabajos que hemos realizado para nuestros clientes.
          </p>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="bg-[#F8F6F3]">

        {proyectos.map((proyecto, index) => {

          const esImpar = index % 2 !== 0

          return (
            <div
              key={index}
              className={`py-20 ${esImpar ? "bg-white" : "bg-[#F8F6F3]"}`}
            >
              <div className="max-w-6xl mx-auto px-6">
                <div className={`flex flex-col ${esImpar ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>

                  {/* CARRUSEL */}
                  <div className="w-full md:w-3/5">
                    <div className="relative">
                      <img
                        src={cloudinary(proyecto.imagenes[indices[index]], "w_1200,h_675,c_fill,q_auto,f_auto")}
                        onClick={() => setProyectoActivo(index)}
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg cursor-pointer"
                      />
                      <button
                        onClick={() => anterior(index)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-[#C89B6D] transition-all duration-300"
                      >←</button>
                      <button
                        onClick={() => siguiente(index)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-[#C89B6D] transition-all duration-300"
                      >→</button>
                      <span className="absolute bottom-3 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded-full">
                        {indices[index] + 1} / {proyecto.imagenes.length}
                      </span>
                    </div>

                    {/* MINIATURAS */}
                    <div className="flex gap-3 mt-4 overflow-x-auto">
                      {proyecto.imagenes.map((img, i) => (
                        <img
                          key={i}
                          src={cloudinary(img, "w_300,h_200,c_fill,q_auto,f_auto")}
                          onClick={() => {
                            setIndices(prev => {
                              const nuevo = [...prev]
                              nuevo[index] = i
                              return nuevo
                            })
                          }}
                          className={`w-24 h-16 object-cover rounded-lg cursor-pointer transition-all duration-200
                            ${indices[index] === i ? "ring-2 ring-[#C89B6D] opacity-100" : "opacity-60 hover:opacity-90"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* TEXTO */}
                  <div className="w-full md:w-2/5">
                    <span className="inline-block bg-[#C89B6D]/10 text-[#8B5A2B] text-sm font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                      {proyecto.categoria}
                    </span>
                    <div className="w-10 h-1 bg-[#C89B6D] mb-4" />
                    <h3 className="text-3xl font-bold text-[#1f2933] mb-4">{proyecto.titulo}</h3>
                    <p className="text-gray-500 leading-relaxed">{proyecto.descripcion}</p>
                  </div>

                </div>
              </div>
            </div>
          )
        })}

      </section>

      {/* MODAL */}
      {proyectoActivo !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={cloudinary(proyectos[proyectoActivo].imagenes[indices[proyectoActivo]], "q_auto,f_auto")}
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={() => anterior(proyectoActivo)}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4 hover:text-[#C89B6D] transition-all duration-300"
            >←</button>
            <button
              onClick={() => siguiente(proyectoActivo)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4 hover:text-[#C89B6D] transition-all duration-300"
            >→</button>
            <button
              onClick={() => setProyectoActivo(null)}
              className="absolute top-2 right-2 text-white text-xl hover:text-[#C89B6D] transition-all duration-300"
            >✕</button>
          </div>
        </div>
      )}

    </>
  )
}

export default Referencias