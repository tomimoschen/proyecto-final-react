import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import './styles/Navbar.css';

const Navbar = () => {
  const { totalQty, totalPrice } = useCartContext();

  return (
    <div className='Navbar'>
      <Link to='/'>Home</Link>
      <Link to='/categorias/selecciones'>Selecciones</Link>
      <Link to='/categorias/equiposEuropeos'>Equipos Europeos</Link>
      <Link to='/cart'>Cart</Link>
      <p>Cantidad de Items: {totalQty}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Navbar;
