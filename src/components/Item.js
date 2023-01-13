import { Link } from "react-router-dom"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ producto }) => {

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
        <Card className='card' key={producto.id}>
        <Card.Title className='cardTittle'>{producto.title}</Card.Title>
        <Card.Img variant="top" src={`https://picsum.photos/200/300?random=${producto.id}`} />
        <Card.Body className='bodyCard'>
            <Card.Text className='cardPrice'>${producto.price}</Card.Text>
            <Card.Text className='cantidadProd'>Cantidad: {contadorProd}</Card.Text>
            <Button variant="secondary" onClick={handleClickSuma}>+</Button>
            <Button variant="secondary" onClick={handleClickResta}>-</Button>
            <Link to={"/item/"+producto.id}><Button variant="primary" onClick={handleClickAgregar}>ME INTERESA</Button></Link>
        </Card.Body>
        </Card>
    )
}

export default Item