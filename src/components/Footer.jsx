import { Link } from "react-router-dom"

function Footer(){

return(

<footer className="bg-[#1f2933] text-white mt-20">

    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        <div>
            <h3 className="text-xl font-bold text-[#C89B6D] mb-4">
            Ebaniscana
            </h3>

            <p className="text-gray-300">
            Carpintería y ebanistería especializada en
            mobiliario a medida y proyectos de madera
            de alta calidad.
            </p>
        </div>

        <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-300">
                <li className="group relative w-fit">
                <Link to="/" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">Inicio</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group relative w-fit">
                <Link to="/servicios" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">Servicios</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group relative w-fit">
                <Link to="/referencias" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">Referencias</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
                <li className="group relative w-fit">
                <Link to="/sobre" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">Sobre Nosotros</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group relative w-fit">
                <Link to="/contacto" className="transition-all duration-300 group-hover:text-[#C89B6D] group-hover:-translate-y-1 inline-block">Contacto</Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C89B6D] transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold mb-4">
            Contacto
            </h4>

            <p className="text-gray-300">
            📍 Piñuecar, Madrid, España
            </p>

            <p className="text-gray-300">
            📞 657927955
            </p>

            <p className="text-gray-300">
            📞 616989616
            </p>

            <p className="text-gray-300">
            ✉ info@ebaniscana.com
            </p>

        </div>

    </div>



    <div className="border-t border-gray-700 text-center py-6 text-gray-400">

        © {new Date().getFullYear()} Ebaniscana. Todos los derechos reservados.

    </div>

</footer>

)

}

export default Footer