import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Item.css';

const Item = ({ product }) => {
  return (
    <div className='productos_container'>
      <div className="card">
              <img className="card-img" src={product.img} alt={product.name}/>
                  <h4 className="card-title">{product.name}</h4>
                  <h5 className="card-sub">Camiseta marca {product.brand}. Equipación {product.kit}</h5>
                  <p className="precio">$ {product.price}</p>
              </div>
      <Link to={`/producto/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
