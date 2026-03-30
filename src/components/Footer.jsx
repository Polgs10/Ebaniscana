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
            <h4 className="font-semibold mb-4">
            Navegación
            </h4>

            <ul className="space-y-2 text-gray-300">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/mobiliario">Mobiliario</Link></li>
                <li><Link to="/referencias">Referencias</Link></li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold mb-4">
            Empresa
            </h4>

            <ul className="space-y-2 text-gray-300">
                <li><Link to="/sobre">Sobre Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>

        <div>
            <h4 className="font-semibold mb-4">
            Contacto
            </h4>

            <p className="text-gray-300">
            📍 Granada, España
            </p>

            <p className="text-gray-300">
            📞 +34 600 000 000
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