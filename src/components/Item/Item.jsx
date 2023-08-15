import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className=" page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={img} alt={ nombre}/>
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">{nombre}</span>
                                    </div>
                                    <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                                </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart" href="#">
                                <span className="price">${precio}</span>
                                <span className="add-to-cart">
                                <Link to= { `/item/${ id }` } className="txt">Ver Detalle </Link>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Item