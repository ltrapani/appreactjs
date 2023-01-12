import ProductList from "./ProductList"

const ItemListContainer = (props) => {
    
    const {iconCart} = props

    if(iconCart){
        return(
            <div>
                <h2>Buenos dias {props.greeting}, aqui puede controlar su carrito</h2>
                <ProductList></ProductList>
            </div>)
    }else{
        return(
            <>
                <div className="itemNumProd">
                    <span className="numProd">3</span>
                </div>
            </>
        )
    }
}

export default ItemListContainer;
