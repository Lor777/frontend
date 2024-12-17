import PropTypes from 'prop-types';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { IoTrashBinSharp, IoPencilSharp } from 'react-icons/io5';
import { useAuth } from '../context/AuthContext';
import {Tooltip} from '@material-tailwind/react'


function ProductCard({ product }) {
  const { deletProduct } = useProducts();
  const {isAdmin}=  useAuth();
  const server = import.meta.env.VITE_BASE_URL+"/img/";

  return (
    <div className="bg-zinc-800 max-w-sm w-full p-5 rounded-sm shadow-md">
      <header className="flex justify-between items-center mb-4">
      <h1 className='text-2xl font-bold'>{product.name}</h1>
      </header>
      {isAdmin && 
  <div className="flex gap-x-2 justify-end">
    <Tooltip content="Eliminar">
      <button 
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
        onClick={() => {
          // console.log(product._id);
          deletProduct(product._id);
        }}
        data-tooltip-target="tooltip-listar"
      >
        <IoTrashBinSharp />
      </button>
    </Tooltip>

    <Tooltip content="Actualizar">
      <button 
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
      >
        <Link to={'/products/' + product._id}>
          <IoPencilSharp />
        </Link>
      </button>
    </Tooltip>
  </div>
}
      <div className="flex justify-center mb-4">
        <img
          src={`${server}${product.image}`}
          alt={product.name}
          className="max-h-[200px] object-contain"
        />
      </div>

      <div className="flex justify-between text-slate-300">
        <p>
          <span className="font-semibold">Precio: </span>${product.price}
        </p>
        <p>
          <span className="font-semibold">Año: </span>{product.year}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
