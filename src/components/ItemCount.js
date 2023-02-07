import { useState } from 'react'
import swal from 'sweetalert';

const Contador = ({ stock, initial = 1, onAdd }) => {

  const [count, setCount] = useState(initial)

  const addCounter = () => {
    count < stock && setCount(count + 1)
  }
  const substractCounter = () => {
    count > initial && setCount(count - 1)
  }

  const swalalert = () => {
    swal({
      title: "Producto añadido",
      text: "al carrito correctamente",
      icon: "success",
      button: "Continuar",
    });}
  
  return (
    <div>
      <button onClick={substractCounter} className='btn'>-</button>
      <span className='text-xl m-2'>{count}</span>
      <button onClick={addCounter} className='btn'>+</button>
      <div onClick={() => {onAdd(count); swalalert()}}  className="btn margin">AGREGAR AL CARRITO</div>

    </div>
  )
}

export default Contador
