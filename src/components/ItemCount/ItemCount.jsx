import React, { useState } from 'react';
import './styles/ItemCount.css';

const ItemCount = ({ initial, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const onChangeHandller = (e) => {
    let a;
    if (parseInt(e.target.value)) {
      a = parseInt(e.target.value);
    } else {
      a = 1;
    }
    setQty(a);
  };

  return (
    <div className='itemCount'>
      <div className='count'>
        <input type='button' value={'-'} onClick={() => (qty > 1 ? setQty(qty - 1) : 1)} />
        <input className='qty' type='number' value={qty} onChange={onChangeHandller} autoFocus />
        <input type='button' value={'+'} onClick={() => (qty < 99 ? setQty(qty + 1) : 99)} />
      </div>
      <div
        onClick={() => {
          onAdd(qty);
        }}
        className='btn-addToCart'>
        <input type='button' value='Add to cart' />
      </div>
    </div>
  );
};

export default ItemCount;
