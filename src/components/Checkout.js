import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import swal from "sweetalert"

const Checkout = () => {
  const { cart, deleteProduct,clearCart } = useCartContext()

  const makeOrder = () => {
    const user = { name: "Lucas", phone: "348915635538", mail: "luucas.trapani@gmail.com" }
    const order = {
      buyer: user,
      items: cart,
      precioCart: precioTotal
    }
    saveOrder(order)
    swal("Su compra se realizo con exito, debe abonar $ " + order.precioCart + " pesos")
    clearCart()
  }

  function handleSubmit(e) {
    e.preventDefault();
    makeOrder()
  }

  const saveOrder = async (order) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const { id } = await addDoc(orderCollection, order)
  }

  const precioTotal = cart.reduce((acc, product) => {
    return acc + product.quantity * product.price
  }, 0);

  if (cart.length <= 0) {
    return <div className="  mt-4 justify-center">
      <p className="mt-4 flex-1 block text-xxl font-semibold text-gray-700 cursor-auto">Agrega articulos en el carrito para avanzar con tu compra</p>
      <Link to={`/`} className=" mt-4 btn btn-primary ">AGREGAR ARTICULOS </Link>
    </div>
  } else {
    return (

      <div>
        <div className=" grid auto-rows-auto gap-1 divide-y margin">
          {cart.map(product => (
            <div className="flex justify items-center">
              <img className="w-32 object-cover rounded-t-md circle flex-none imgCart" src={product.picture} alt="No se cargo la imagen" />
              <p className=" flex-1 block text-xl font-semibold text-black cursor-auto">{product.name}</p>
              <p className=" flex-1  block text-xl font-semibold text-white cursor-auto">Cantidad= {product.quantity}</p>
              <p className=" flex-1  block text-xl font-semibold text-white cursor-auto">Subtotal= ${product.quantity * product.price}</p>
              <button className=" flex-1  btn" onClick={() => deleteProduct(product)}>Eliminar producto</button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="flex-1"></span>

          <p className="block text-xl font-semibold text-black cursor-auto object-right flex-1 w-64	">TOTAL DEL CARRITO = $ {precioTotal}</p>
        </div>

      <div className="margin">
        <div className="mt-10 sm:mt-0 bg-emerald-900 padding">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className=" text-3xl leading-6 text-white">Informacion Personal</h3>
                <p className="mt-1 text-sm text-white">Complete el formulario para confirmar su compra</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-emerald-900 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-white">
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full paddingInput rounded-md border-gray-300 bg-white text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-white">
                          Apellido
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md paddingInput border-gray-300 text-black bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-white">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 paddingInput text-black bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-white">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border paddingInput border-gray-300 text-black bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>Argentina</option>
                          <option>Uruguay</option>
                          <option>Chile</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-white">
                          Calle
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 paddingInput bg-white text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-white">
                          Ciudad
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 block w-full rounded-md border-gray-300 paddingInput bg-white text-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-white">
                          Provincia
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 block w-full rounded-md border-gray-300 paddingInput text-black shadow-sm bg-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2 ">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-white">
                          Codigo postal
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 block w-full rounded-md border-gray-300 paddingInput text-black bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-900 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border  border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)

  }




}

export default Checkout