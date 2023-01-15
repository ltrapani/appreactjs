import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listadoDeProductos } from './data/Articulos'
import Item from './Item'




const ItemListContainer = () => {



  const [productos, setProductos] = useState([])

  const { idCategory } = useParams()

  if (idCategory) {

  } else {

  }

  useEffect(() => {
    if (idCategory) {
      getlistadoDeProductos()
        .then(res => setProductos(res.filter(producto => producto.category === idCategory)))
        .catch(err => console.log(err))
    } else {
      getlistadoDeProductos()
        .then(res => setProductos(res))
        .catch(err => console.log(err))
    }

    return () => setProductos([])
  }
    , [idCategory])

  const getlistadoDeProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listadoDeProductos)
      }, 100);

    })
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {productos.map(i => <Item key={i.id}{...i} />)}
    </div>
  )
}

export default ItemListContainer