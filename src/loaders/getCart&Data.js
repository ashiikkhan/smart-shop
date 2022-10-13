import { getStoredCart } from '../utils/fakeDB';

export const productsAndCartData = async () => {
  //products
  const productsData = await fetch('products.json');
  const products = await productsData.json();

  //cart
  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};

// console.log('test', savedCart); //test purpose
// console.log('found products', foundProduct); //test purpose
