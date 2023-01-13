import Button from 'react-bootstrap/Button';

const Carrito = () => {

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div>
            <Button variant="primary" onClick={handleClick}>AGREGAR AL CARRITO</Button>
        </div>
    )
}

export default Carrito