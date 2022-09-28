import React from 'react';
import Item from '../Item/Item';
import './styles/ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className='ItemList'>
      {products.map((product, i) => {
        return <Item key={i} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
