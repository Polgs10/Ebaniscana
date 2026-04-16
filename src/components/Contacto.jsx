import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contacto() {

  const telefonos = [
    { label: "Llamar a Luis", number: "657927957", type: "tel" },
    { label: "Llamar a José", number: "616989616", type: "tel" }
  ]

  const [formData, setFormData] = useState({
    nombre: "", email: "", telefono: "", ciudad: "", mensaje: ""
  })
  const [estado, setEstado] = useState(null) // "enviando" | "ok" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setEstado("enviando")
    try {
      await emailjs.send(
        "service_yeeoz1g",
        "template_4kc1a1f",
        {
          nombre:   formData.nombre,
          email:    formData.email,
          telefono: formData.telefono,
          ciudad:   formData.ciudad,
          mensaje:  formData.mensaje,
        },
        "9QZ-memxSyPdfwuFJ"
      )
      setEstado("ok")
      setFormData({ nombre: "", email: "", telefono: "", ciudad: "", mensaje: "" })
    } catch (error) {
      setEstado("error")
    }
  }

  return (
    <>

      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/da5rambq9/image/upload/w_1920,h_600,c_fill/v1774892046/P1010092_JPG_vly0sa.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-[#1f2933]/70" />
        <div className="relative text-center text-white px-6">
          <p className="text-[#C89B6D] uppercase tracking-widest text-sm mb-3">Estamos aquí para ayudarte</p>
          <h1 className="text-5xl font-bold">Contacto</h1>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-[#8B5A2B] uppercase tracking-widest text-sm mb-3">Presupuesto sin compromiso</p>
            <h2 className="text-4xl font-bold text-[#1f2933]">Solicita tu presupuesto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* FORM */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-10 h-1 bg-[#C89B6D] mb-6" />
              <div className="grid grid-cols-2 gap-4">

                <input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C89B6D] col-span-1"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C89B6D] col-span-1"
                />
                <input
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C89B6D] col-span-1"
                />
                <input
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C89B6D] col-span-1"
                />
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu proyecto..."
                  className="col-span-2 p-3 border border-gray-200 rounded-lg h-32 focus:outline-none focus:border-[#C89B6D] resize-none"
                />

                {estado === "ok" && (
                  <p className="col-span-2 text-green-600 text-center font-medium">
                    ✅ Mensaje enviado correctamente
                  </p>
                )}
                {estado === "error" && (
                  <p className="col-span-2 text-red-500 text-center font-medium">
                    ❌ Error al enviar. Inténtalo de nuevo.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={estado === "enviando"}
                  className="col-span-2 bg-[#8B5A2B] text-white py-3 rounded-lg hover:bg-[#C89B6D] transition-all duration-300 font-semibold disabled:opacity-60"
                >
                  {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
                </button>

              </div>
            </div>

            {/* INFO */}
            <div className="flex flex-col gap-6">

              {/* DATOS */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-10 h-1 bg-[#C89B6D] mb-6" />
                <h3 className="text-xl font-semibold text-[#1f2933] mb-6">Datos de contacto</h3>

                <div className="flex flex-col gap-4 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="text-[#C89B6D] text-xl">📍</span>
                    <span>Piñuécar, Madrid</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#C89B6D] text-xl">📞</span>
                    <span>689 575 139</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#C89B6D] text-xl">✉️</span>
                    <span>contacto@ebaniscana.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#C89B6D] text-xl">⏰</span>
                    <span>Lunes a Viernes: 8:00 - 14:00 y 16:00 - 19:00</span>
                  </div>
                </div>
              </div>

              {/* BOTONES */}
              <div className="flex flex-col gap-3">
                {telefonos.map((tel, index) => {
                  const link =
                    tel.type === "wa"
                      ? `https://wa.me/${tel.number.replace("+", "")}`
                      : `tel:${tel.number}`

                  return (
                    <a
                      key={index}
                      href={link}
                      className="bg-[#1f2933] text-white p-4 rounded-xl text-center hover:bg-[#C89B6D] transition-all duration-300 font-semibold"
                    >
                      📞 {tel.label}: {tel.number}
                    </a>
                  )
                })}
              </div>

            </div>

          </div>

          {/* MAPA */}
          <div className="mt-16">
            <div className="w-10 h-1 bg-[#C89B6D] mb-6" />
            <h3 className="text-2xl font-semibold text-[#1f2933] mb-6">Dónde puedes encontrarnos</h3>
            <iframe
              className="w-full h-[400px] rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.1048382677487!2d-3.6004842162704516!3d41.03231300000171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43e50d91e6baff%3A0x70255d7a113adabc!2sEBANISCANA%20SL!5e0!3m2!1ses!2sus!4v1773086790870!5m2!1ses!2sus"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </>
  )
}

export default Contacto