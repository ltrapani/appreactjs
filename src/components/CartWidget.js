import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
return(
        <>
            <AiOutlineShoppingCart className="icon-shop iconcart"/>
            <div className="itemNumProd">
                    <span className="numProd">3</span>
            </div>
        </>
    )
}

export default CartWidget;
