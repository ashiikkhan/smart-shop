import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addToDb } from '../utils/fakeDB';
import Product from './Product';
import { ProductsContext } from './Root';

const Shop = () => {
  const products = useContext(ProductsContext);

  const [cart, setCart] = useState([]);

  //add to cart and setItem on local storage:
  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
      // console.log(newCart);
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(product.id);

    toast.success('Product Added!', { autoClose: 500 });
  };
  console.log(cart);
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
