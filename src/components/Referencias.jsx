import { useState } from "react"

function Referencias(){

const proyectos = [
{
imagenes: [
"https://picsum.photos/800/400?1",
"https://picsum.photos/800/400?2",
"https://picsum.photos/800/400?3",
"https://picsum.photos/800/400?4"
]
},
{
imagenes: [
"https://picsum.photos/800/400?5",
"https://picsum.photos/800/400?6",
"https://picsum.photos/800/400?7"
]
}
]

// 🔥 un índice por proyecto
const [indices, setIndices] = useState(proyectos.map(()=>0))

// modal
const [proyectoActivo, setProyectoActivo] = useState(null)

// cambiar imagen
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

return(

<section className="py-20 bg-[#F8F6F3]">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Referencias
</h2>

<div className="flex flex-col gap-16">

{proyectos.map((proyecto, index)=>(

<div key={index}>

{/* IMAGEN PRINCIPAL */}
<div className="relative">

<img
src={proyecto.imagenes[indices[index]]}
onClick={()=>setProyectoActivo(index)}
className="w-full h-[400px] object-cover rounded-xl shadow-lg cursor-pointer"
/>

{/* IZQUIERDA */}
<button
onClick={()=>anterior(index)}
className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
>
←
</button>

{/* DERECHA */}
<button
onClick={()=>siguiente(index)}
className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
>
→
</button>

</div>

{/* MINIATURAS */}
<div className="flex gap-3 mt-4 overflow-x-auto">

{proyecto.imagenes.map((img,i)=>(

<img
key={i}
src={img}
onClick={()=>{
setIndices(prev=>{
const nuevo = [...prev]
nuevo[index] = i
return nuevo
})
}}
className="w-24 h-16 object-cover rounded-lg cursor-pointer hover:opacity-80"
/>

))}

</div>

</div>

))}

</div>

</div>

{/* MODAL */}
{proyectoActivo !== null && (

<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

<div className="relative">

<img
src={proyectos[proyectoActivo].imagenes[indices[proyectoActivo]]}
className="max-w-[90vw] max-h-[90vh] rounded-lg"
/>

{/* FLECHAS */}
<button
onClick={()=>anterior(proyectoActivo)}
className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
>
←
</button>

<button
onClick={()=>siguiente(proyectoActivo)}
className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
>
→
</button>

{/* CERRAR */}
<button
onClick={()=>setProyectoActivo(null)}
className="absolute top-2 right-2 text-white text-xl"
>
✕
</button>

</div>

</div>

)}

</section>

)

}

export default Referencias