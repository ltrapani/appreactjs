import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Contexto, useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"
import { listadoDeProductos } from "./data/Articulos"


const ItemDetail = () => {

  const { addnewProduct } = useCartContext(Contexto)

  const onAdd = (quantity) => {
    const newProduct = { ...item, quantity }
    addnewProduct(newProduct)
  }

  const [item, setItem] = useState({})
  const { id } = useParams()

  const getItemDetail = () => {
    return new Promise((resolve, reject) => {
      const item = listadoDeProductos.find(p => p.id == id)
      setTimeout(() => {
        resolve(item)
      }, 100);
    })
  }

  useEffect(() => {
    getItemDetail().then(res => {
      setItem(res)
    })
  }, [id])



  return (
    <div className="mt-4 flex justify-left marginDetail">
      <div className=" p-6 bg-white rounded-xl shadow-xl">
        <img className="w-64 object-cover rounded-t-md imgDetail" src={item.picture} alt="No se cargo la imagen" />
        <div className="mt-1">
          <h1 className="text-2xl font-bold text-gray-700">{item.name}</h1>
          <p className="block text-xl font-semibold text-gray-700 cursor-auto">Descripcion del producto: {item.description}</p>
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <p className="block text-xl font-semibold text-gray-700 cursor-auto">${item.price}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <Link to={`/`} className="btn margin">VOLVER</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail