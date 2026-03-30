import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#1f2933] text-white p-4 shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-[#C89B6D]">
          Ebaniscana
        </h1>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>

        <ul className="hidden md:flex gap-8">

          <li className="group relative">
            <Link to="/" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">
              Inicio
            </Link>

            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link to="/servicios" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">
              Servicios
            </Link>

            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link to="/mobiliario" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">
              Mobiliario
            </Link>

            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link to="/referencias" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">
              Referencias
            </Link>

            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link to="/sobrenosotros" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">
              Sobre nosotros
            </Link>

            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link to="/contacto" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">
              Contacto
            </Link>

            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
          </li>

        </ul>

      </div>

      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-center animate-fadeIn">
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/mobiliario">Mobiliario</Link></li>
          <li><Link to="/referencias">Referencias</Link></li>
          <li><Link to="/sobrenosotros">Sobre</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar