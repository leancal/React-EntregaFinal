import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import "./itemListContainer.css";

const ItemListContainer = () => {

  
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( ()=> {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  },[idCategoria])

  console.log(productos)

  return (
    <div className = "container">
      <h1 style={{textAlign: "center"}}> Tengan una calida bienvenida </h1>
      <ItemList productos={productos} />
    </div>
  )}

export default ItemListContainer