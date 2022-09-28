import React from 'react';
import './styles/Cart.css';
import { useCartContext } from '../../context/cartContext';

const Cart = () => {
  const { cart, removeItem, emptyCart } = useCartContext();

  const deleteFromCart = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    emptyCart();
  };

  return (
    <div className='Cart'>
      <p>This is the Cart</p>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                  <p>{item.quantity * item.price}</p>
                  <button onClick={() => deleteFromCart(item)}>Eliminar del carrito</button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
      <button onClick={() => deleteCart()}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
