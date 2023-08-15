import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgTe = "https://firebasestorage.googleapis.com/v0/b/react-coder-9f0d7.appspot.com/o/logo.png?alt=media&token=334170e3-ebd6-4752-8cd4-5bbd8713f995";
  return (


    <nav className="navBarContainer">
      <Link to={"/"}>
        <img src={imgTe} alt="" />
      </Link><NavLink to={""} className={({ isActive }) => isActive ? "activeNavBarButton" : "navBarButton"}>Productos</NavLink>

      <NavLink className={({ isActive }) => isActive ? "activeNavBarButton" : "navBarButton"} to={"/categoria/2"}> Camperas </NavLink>

      <NavLink className={({ isActive }) => isActive ? "activeNavBarButton" : "navBarButton"} to={"/categoria/3"}> Remeras </NavLink>
      <CartWidget />
    </nav>


  );
}

export default NavBar