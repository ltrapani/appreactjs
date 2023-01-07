import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
    return (
        <Card className='card'>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='bodyCard'>
            <Card.Title className='cardTittle'>{props.nombre}</Card.Title>
            <Card.Text className='cardPrice'>${props.precio}</Card.Text>
            <Card.Text>
                {props.descripcion}
            </Card.Text>
            <Button variant="primary">AGREGAR AL CARRITO</Button>
        </Card.Body>
        </Card>
    )
}

export default Product;

