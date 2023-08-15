import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://firebasestorage.googleapis.com/v0/b/react-coder-9f0d7.appspot.com/o/cart.png?alt=media&token=92106bfc-366e-4ff3-8374-8b1664ea449d";

  return (
    <div>
      <Link style={{textDecoration:"none"}} to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget