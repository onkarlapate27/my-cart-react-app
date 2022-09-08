import React from 'react'
import Product from './Product'

export default function ProductsList(props) {
  // console.log(props.incrementQuantity);

  return (
    props.productsList.length > 0 ?
    props.productsList.map((product, i) => {
      return (
        <Product
          eachProduct={product}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          removeItem = {props.removeItem}
          key={i}
          index={i}
        />);
    })
    :
      <h2 className='p-2 bg-warning text-center d-inline'>Your Cart is Empty, Fill it quickly!</h2>
  );
}
