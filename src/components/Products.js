import React, {useState} from 'react'
import Product from './Product'

const Products = () => {

    const [products, setProducts] = useState([
        {
            id:1,
            nombre:"Microfono HyperX QuadCast",
            precio:"32.809",
            img:"./img/HyperX QuadCast.webp",
            descripcion:"Con el micrófono HyperX descubrirás una nueva forma de captar y emitir audios. Fiel reflejo de la realidad. Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces.",
        },
        {
            id:2,
            nombre:"Monitor Samsung 27 G4",
            precio:"134.699",
            img:"./img/Samsung27G4.webp",
            descripcion:"Una experiencia visual de calidad Este monitor de 27 te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
        },
        {
            id:3,
            nombre:"Corsair K60 RGB PRO",
            precio:"25.999",
            img:"./img/Corsair K60 RGB PRO.webp",
            descripcion:"Tecnología antighosting Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
        },
        {
            id:4,
            nombre:"Logitech G Series Lightsync G203",
            precio:"6.999",
            img:"./img/Logitech G Series Lightsync G203.webp",
            descripcion:"Adaptado a tus movimientos El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.",
        },
        {
            id:5,
            nombre:"Logitech G Series G733",
            precio:"45.500",
            img:"./img/Logitech G Series G733.webp",
            descripcion:"Con los Logitech G733 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. El formato perfecto para vos. El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        },
        {
            id:6,
            nombre:"Momodesign GC009",
            precio:"49.999",
            img:"./img/Momodesign GC009.webp",
            descripcion:" Confort óptimo, respaldo amplio con logo bordado, soporte lumbar, base de 5 radios con ruedas. Tejido y ecopiel. Fácil de limpiar. Capacidad 120 kg. Diseño exclusivo, cojín reposacabeza, práctico y configurable, respaldo reclinable y asiento regulable de 43 a 53 cm",
        }
    ])

    return (
        <div className='row'>
            {products.map(product => {
                return <Product 
                key={product.id} 
                nombre={product.nombre} 
                img={product.img} 
                precio={product.precio}
                descripcion={product.descripcion}>
                </Product>
            })}
        </div>
    )
}

export default Products