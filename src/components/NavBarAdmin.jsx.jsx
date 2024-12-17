import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IoPersonAdd, IoLogIn, IoAddCircle, IoLogOut, IoList, IoChevronDownSharp } from 'react-icons/io5';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


function NavBarAdmin() {
  const { isAuthenticated, logout, user} = useAuth();
  const nevigate= useNavigate();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between items-center py-5 px-10 rounded-lg">
      {/* Título principal */}
      <Link to={isAuthenticated ? '/products' : '/'}>
        <h1 className="text-2xl font-bold ">Productos</h1>
      </Link>

      {/* Menú principal */}
      <ul className="flex gap-x-2">
      
            {/* Nombre de usuario */}
            <li className="text-white flex items-center gap-1">
              <IoPersonAdd size={20} />
              {user.username}
            </li>

            {/* Menú desplegable */}
            <li>
              <Menu as="div" className="relative">
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-zinc-800 py-1.5 px-3">
                  Products
                  <IoChevronDownSharp className="fill-white/60" size={30} />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 bg-transparent rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/products"
                        className={`${
                          active ? 'bg-blue-100' : ''
                        } block px-4 py-2 text-black-700 flex items-center`}
                      >
                        <IoList className="inline mr-2" />
                        Listar
                        <kbd className="ml-auto hidden font-sans text-xs">⌘L</kbd>
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/add-product"
                        className={`${
                          active ? 'bg-blue-100' : ''
                        } block px-4 py-2 text-black-700 flex items-center`}
                      >
                        <IoAddCircle className="inline mr-2" />
                        Agregar
                        <kbd className="ml-auto hidden font-sans text-xs">⌘A</kbd>
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => logout()}
                        className={`${
                          active ? 'bg-blue-100' : ''
                        } block w-full text-left px-4 py-2 text-red-600 flex items-center`}
                      >
                        <IoLogOut className="inline mr-2" />
                        Salir
                        <kbd className="ml-auto hidden font-sans text-xs">⌘Q</kbd>
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>
      </ul>
    </nav>
  );
}

export default NavBarAdmin;
