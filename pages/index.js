import Head from 'next/head';
import Form from '../components/Forms/Forms';
import ShoppingList from '../components/ShoppingList/ShoppingList';
import { useState } from 'react';

export default function Home() {
  const [cart , setCart] =useState([])

  const addITemToCart = (item) => {
   setCart([...cart , item])
  }
  const deleteItemFromCart = (item) => {
    const updatedCart = cart.filter((i) => i !== item);
    setCart(updatedCart);
  };

  return (
    <div style={{ width: '100vw' }}>
      <Head>
        <title>Create Next App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>
      <div className="card">
        <Form addITemToCart={addITemToCart} />
        <ShoppingList cart={cart} handleItemDelete={deleteItemFromCart} />
      </div>
    </div>
  );
}
