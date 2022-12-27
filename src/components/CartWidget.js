import { AiOutlineShoppingCart } from "react-icons/ai";
import ItemListContainer from "./ItemListContainer";

const CartWidget = () => {
return(
        <>
            <AiOutlineShoppingCart className="icon-shop iconcart"/>
            <ItemListContainer/>
        </>
    )
}

export default CartWidget;
