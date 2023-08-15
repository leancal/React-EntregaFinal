import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <div className="countContainer">
        <div className="counter">
            <button className="button" onClick={ decrementar }> - </button>
            <strong> {contador} </strong>
            <button className="button" onClick={ incrementar }> + </button>
        </div>
        <button className="button" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>

    </div>
  )
}

export default ItemCount