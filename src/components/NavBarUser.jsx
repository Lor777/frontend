import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IoPersonAdd, IoChevronDownSharp, IoBagOutline, IoLogInOutline } from 'react-icons/io5';
import { Menu } from '@headlessui/react';

function NavBarUsers() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between items-center py-5 px-10 rounded-lg">
      {/* Título principal */}
      <Link to={isAuthenticated ? '/getallproducts' : '/'}>
        <h1 className="text-2xl font-bold">Productos</h1>
      </Link>

      {/* Menú principal */}
      <ul className="flex gap-x-2">
        <>
          {/* Nombre de usuario */}
          <li className="text-white flex items-center gap-1">
            <IoPersonAdd size={20} />
            {user.username}
          </li>

          {/* Menú desplegable */}
          <li>
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center gap-2 rounded-md bg-zinc-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
                Products
                <IoChevronDownSharp className="fill-white/60" size={30} />
              </Menu.Button>
              <Menu.Items
                className="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate('/getallproducts')}
                      className={`group flex w-full items-center gap-2 px-4 py-2 rounded-md ${
                        active ? 'bg-gray-700 text-white' : 'text-gray-300'
                      }`}
                    >
                      <IoBagOutline size={20} />
                      Listar
                    </button>
                  )}
                </Menu.Item>
                <div className="my-1 h-px bg-white/5" />

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => logout()}
                      className={`group flex w-full items-center gap-2 px-4 py-2 rounded-md ${
                        active ? 'bg-gray-700 text-red-600' : 'text-gray-300'
                      }`}
                    >
                      <IoLogInOutline size={20} />
                      Salir
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
        </>
      </ul>
    </nav>
  );
}

export default NavBarUsers;
