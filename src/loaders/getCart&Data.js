import { getStoredCart } from '../utils/fakeDB';

export const productsAndCartData = async () => {
  //products
  const productsData = await fetch('products.json');
  const products = await productsData.json();

  //cart
  const savedCart = getStoredCart();
  console.log('test', savedCart); //test purpose
  const initialCart = [];

  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    console.log('found products', foundProduct); //test purpose
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};
