import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../api/productos';
import ItemList from '../ItemList/ItemList';
import './styles/ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 100);
    });

    getProducts.then((result) => {
      if (categoryId) {
        const prodFiltered = result.filter((prod) => prod.category === categoryId);
        setProducts(prodFiltered);
      } else {
        setProducts(result);
      }
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, [categoryId]);

  return loading ? <p>LOADING....</p> : <ItemList products={products} />;
};

export default ItemListContainer;
