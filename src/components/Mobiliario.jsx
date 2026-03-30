import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

function Mobiliario(){

const imagenes = [
"https://res.cloudinary.com/da5rambq9/image/upload/v1773093046/Catas_2_JPG_vxynfg.avif",
"https://picsum.photos/400/300?2",
"https://picsum.photos/400/300?3",
"https://picsum.photos/400/300?4"
]

return(

<section className="py-20">

    <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
        Mobiliario
        </h2>

        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        >

        {imagenes.map((img,index)=>(

        <SwiperSlide key={index}>

        <img
        src={img}
        className="rounded-xl shadow-lg"
        />

        </SwiperSlide>

        ))}

        </Swiper>

    </div>

</section>

)

}

export default Mobiliario