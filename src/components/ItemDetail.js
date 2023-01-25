import React from 'react'
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


  useEffect(() => {
    getItemDetail().then(res => {
      setItem(res)
    })
  }, [id])

  const getItemDetail = () => {
    return new Promise((resolve, reject) => {
      const item = listadoDeProductos.find(p => p.id == id)
      setTimeout(() => {
        resolve(item)
      }, 100);
    })
  }
  
    return (
      <div className="mt-4 flex justify-left">
    <div className=" p-6 bg-white rounded-xl shadow-xl">
      <img className="w-64 object-cover rounded-t-md" src={item.img} alt= "No se cargo la imagen" />
      <div className="mt-1">
        <h1 className="text-2xl font-bold text-gray-700">{item.nombre}</h1>
        <p className="block text-xl font-semibold text-gray-700 cursor-auto">{item.descripcion}</p>
        <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
          <p className="block text-xl font-semibold text-gray-700 cursor-auto">${item.precio}</p>
        <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        <Link to={`/`} className="btn">VOLVER</Link>
        </div>
      </div>
    </div>
  </div>
    )
}

export default ItemDetail