import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = (props) => {

    const [contadorProd, setContadorProd] = useState(0)

    const handleClickSuma = () => {
        setContadorProd(contadorProd + 1)
    }

    const handleClickResta = () => {
        setContadorProd(contadorProd - 1)
    }

    const handleClickAgregar = () => {
        setContadorProd(0)
    }
    
    return (
        <Card className='card'>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='bodyCard'>
            <Card.Title className='cardTittle'>{props.nombre}</Card.Title>
            <Card.Text className='cardPrice'>${props.precio}</Card.Text>
            <Card.Text>
                {props.descripcion}
            </Card.Text>
            <Card.Text className='cantidadProd'>Cantidad: {contadorProd}</Card.Text>
            <Button variant="secondary" onClick={handleClickSuma}>+</Button>
            <Button variant="secondary" onClick={handleClickResta}>-</Button>
            <Button variant="primary" onClick={handleClickAgregar}>AGREGAR AL CARRITO</Button>
        </Card.Body>
        </Card>
    )
}

export default Item;

