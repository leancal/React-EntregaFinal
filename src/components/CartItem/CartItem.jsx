import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div class="checkout-container">
      <div class="left-side">
        <div class="text-box">
          <h1 class="home-heading">{item.nombre}</h1>
        </div>
      </div>

      <div class="right-side">
        <div class="receipt">
          <h2 class="receipt-heading">Recibo</h2>
          <div>
            <table class="table">
              <tr>
                <td>{item.nombre} x {cantidad}</td>
                <td class="price">$ {item.precio * cantidad}</td>
              </tr>
              <tr>
                <td>Precio por prenda</td>
                <td class="price">$ {item.precio.toFixed(2)}</td>
              </tr>
              <tr>
                <td><button className="button" onClick={()=> eliminarProducto(item.id)}> Eliminar producto </button></td>
              </tr>
              
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CartItem