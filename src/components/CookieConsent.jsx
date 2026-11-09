import { Link } from "react-router-dom"

function CookieConsent({ visible, onChoose }) {
  if (!visible) return null

  return (
    <aside
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-5 shadow-2xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-semibold text-[#1f2933]">Privacidad y cookies</h2>
          <p className="mt-1 max-w-3xl text-sm text-gray-700">
            No usamos cookies publicitarias ni de analítica. Google Maps solo se carga si aceptas
                las cookies opcionales. Consulta la{" "}
            <Link to="/cookies" className="underline hover:text-[#8B5A2B]">
              política de cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onChoose("rejected")}
            className="rounded border border-gray-400 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Rechazar opcionales
          </button>
          <button
            type="button"
            onClick={() => onChoose("accepted")}
            className="rounded bg-[#8B5A2B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#70451f]"
          >
            Aceptar opcionales
          </button>
        </div>
      </div>
    </aside>
  )
}

export default CookieConsent
