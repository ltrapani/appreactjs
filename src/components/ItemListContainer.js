import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [cargar, setCargar] = useState(false)
    const [productos,setProductos] = useState([])

    useEffect(() => {


        const pedido = fetch("https://fakestoreapi.com/products")

        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setCargar(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div>
            {cargar ? 'Productos Cargados' : 'Cargando...'}
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer