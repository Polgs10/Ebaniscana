import { Link } from "react-router-dom"

function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center text-[#1f2933]">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#8B5A2B]">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold">No encontramos esta página</h1>
      <p className="mt-4 max-w-xl text-gray-600">
        Puede que el enlace esté desactualizado o que la página se haya movido.
      </p>
      <Link
        to="/"
        className="mt-8 rounded bg-[#8B5A2B] px-6 py-3 font-semibold text-white hover:bg-[#70451f]"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
