import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList'
import Footer from './components/Footer';
import './App.css';
import React, { useState } from 'react';
import AddItem from './components/AddItem';

function App() {
  const productsList = [
    {
      name: "Google Pixel 6",
      price: 60000,
      quantity: 0,
    },
    {
      name: "Samsung Galaxy M30",
      price: 15000,
      quantity: 0,
    }
  ]

  let [productList, setProductsList] = useState(productsList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newList = [...productList];
    let newTotal = totalAmount;
    newList[index].quantity++;
    setProductsList(newList);
    newTotal += newList[index].price;
    setTotalAmount(newTotal);
  };

  const decrementQuantity = (index) => {
    let newList = [...productList];
    let newTotal = totalAmount;
    if (newList[index].quantity != 0) {
      newList[index].quantity--;
      setProductsList(newList);
      newTotal -= newList[index].price;
      setTotalAmount(newTotal);
    }
  };

  const resetQty = () => {
    let newList = [...productList];
    newList.map((products) => {
      products.quantity = 0;
    });
    setProductsList(newList);
    setTotalAmount(0);
  }

  const payNow = () => {
    totalAmount > 0 ?
    alert('Redirecting to Payment Gateway')
    : alert('Add some items first');
  }

  const removeItem = (index) => {
    let newList = [...productList];
    let newTotal = totalAmount;
    newTotal -= (newList[index].price * newList[index].quantity);
    newList.splice(index, 1);
    setProductsList(newList);
    setTotalAmount(newTotal);
  }

  const addItem = (productName, productPrice) =>{
    let newList = [...productList];
    newList.push({
       name: productName,
       price: productPrice,
       quantity: 0,
    })
    setProductsList(newList); 
  }

  return (
    <>
      <Navbar />
      <section className='container mt-5'>
        <AddItem addItem={addItem} />
      </section>
      <main className='container mt-5'>
        <ProductsList productsList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <footer className='container mt-5'>
        <Footer totalAmount={totalAmount} resetQty={resetQty} payNow={payNow}/>
      </footer>
    </>
  );
}

export default App;
