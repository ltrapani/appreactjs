import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import logoMundoGamer from "./img/icon.png"

const NavBar = () => {
  return (
    <div className="navbar bg-emerald-900">
      <div>
        <img className="w-20 mr-5" src={logoMundoGamer} alt="logoMundoGamer" />
      </div>
      <div className="flex-1">
        <h1 className=" normal-case text-white text-3xl tittleMundoGamer"> MundoGamer</h1>
      </div>
      <div className="flex-2">
        <Link to="/" className="btn btn-ghost  text-white text-xl">INICIO</Link>
      </div>
      <div className="flex-">
        <Link to={`/category/perisfericos`} className="btn btn-ghost normal-case text-white text-xl">PERISFERICOS</Link>
      </div>
      <div className="flex-">
        <Link to={`/category/silla`} className="btn btn-ghost normal-case text-white text-xl">SILLA</Link>
      </div>
      <div className="flex-">
        <Link to={`/category/monitor`} className="btn btn-ghost normal-case text-white text-xl">MONITORES</Link>
      </div>
      <div className="flex-none">
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar