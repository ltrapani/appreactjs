import { useState } from "react"
import Button from 'react-bootstrap/Button';

const ItemListContainer = (props) => {
    
    const [contadorProd, setContadorProd] = useState(0)
    const {iconCart} = props

    const handleClickSuma = () => {
        setContadorProd(contadorProd + 1)
    }

    const handleClickVaciar = () => {
        setContadorProd(0)
    }

    if(iconCart){
        return(
            <div>
                <p>Buenos dias {props.greeting}, aqui puede controlar su carrito</p>
                <p>Productos : {contadorProd}</p>
                <Button variant="primary" onClick={handleClickSuma} className="btn">Agregar al carrito</Button>
                <Button variant="secondary" onClick={handleClickVaciar} className="btn">Vaciar al carrito</Button>
            </div>)
    }else{
        return(
            <>
                <div className="itemNumProd">
                    <p className="numProd">3</p>
                </div>
            </>
        )
    }
}

export default ItemListContainer;
