import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CarritoContext } from '../../context/CarritoContext';

import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  console.log(agregarCantidad);

  return (
    <div className="cardDetContainer">
      <p className="cardDetTitle">{nombre}</p>
      <div className="cardDetails">
        <img className="cardDetCover" src={img} alt={nombre} />
        <div className="productDetails">
          <p className="cardDetPrice">${precio}</p>
          <p className="cardDetDesc"><b>Descripcion:</b> {descripcion} </p>
          <p className="cardDetStock">Stock disponible: {stock}</p>
          {
            agregarCantidad > 0 ? (<Link className='button red' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
          }
        </div>
      </div>
    </div>


  )
}

export default ItemDetail