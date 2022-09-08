import React from 'react'

export default function Footer(props)  {
  return (
    <div>
        <div className="row fixed-bottom">
            <button className='btn btn-danger col-md-2 col-2 fs-5' onClick={props.resetQty}>Reset</button>
            <span className='col-md-8 col-6 bg-dark text-center p-1 text-white fs-3'>Total: ₹{props.totalAmount}</span>
            <button className='btn btn-success col-md-2 col-4 fs-4' onClick={props.payNow}>Pay Now</button>
        </div>
    </div>
  ) 
}
