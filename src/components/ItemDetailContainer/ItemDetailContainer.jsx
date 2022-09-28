import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { productos } from '../../api/productos';
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    getProducts.then((result) => {
      const prodFiltered = result.filter((prod) => prod.id == productId);
      setProduct(prodFiltered[0]);
      setLoading(false);
    });
  }, [productId]);

  return loading ? <p>LOADING....</p> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
