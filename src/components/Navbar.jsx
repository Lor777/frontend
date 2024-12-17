import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IoPersonAdd, IoLogIn, IoAddCircle, IoLogOut, IoPerson } from "react-icons/io5";
import {Tooltip} from '@material-tailwind/react'

import NavBarAdmin from "./NavBarAdmin.jsx";
import NavBarUsers from "./NavBarUser";
function Navbar() {
  const { isAuthenticated, isAdmin } = useAuth();
  if(isAuthenticated && isAdmin)
    return(<NavBarAdmin />)
  else if (isAuthenticated)
    return(<NavBarUsers />)
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between items-start py-5 px-10 rounded-lg">
      <Link to={isAuthenticated ? '/products' : '/'}>
        <h1 className="text-2xl font-bold">
          Productos
        </h1>
      </Link>
  
      <ul className="flex gap-x-2">
        <li>
          <Tooltip content="Iniciar Sesión">
            <Link to="/login" className="bg-zinc-500 rounded-sm">
              <IoLogIn size={30} />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Registrar">
            <Link to="/register" className="bg-zinc-500 rounded-sm">
              <IoPersonAdd size={30} />
            </Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
