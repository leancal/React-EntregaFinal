import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito</h2>
                <Link className="miBtn" to='/'> Volver a inicio </Link>
            </>
        )
    }
    return (
        <div >
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="checkoutContainer">
                <h3>Total: ${total.toFixed(2)} </h3>
                <h3>Cantidad total: {cantidadTotal} </h3>
                <button className="button" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                <Link className="button red"  to='/checkout'> Terminar Compra </Link>   
            </div>

        </div>
    )
}

export default Cart