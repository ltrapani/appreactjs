import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


function NavBar (props) {
    
    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if(isHeader){

        return (
                <Navbar className='navbar'>
                    <Container>
                    <img src="./img/icon.png" alt='iconimage' className='icon-img'></img>
                    <Navbar.Brand className='me-auto' href="#home">MundoGamer</Navbar.Brand>
                    <Nav className='navbar-links'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#catalogo">Catalogo</Nav.Link>
                        <Nav.Link href="#sobrenosotros">Sobre nosotros</Nav.Link>
                        <Nav.Link><CartWidget/></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        )
    }else {
        return (
            <nav>
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
}

export default NavBar;