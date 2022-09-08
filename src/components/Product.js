import React from 'react'
// import {incrementQuantity} from '../App'

export default function Product(props) {
    // console.log(props.incrementQuantity);
    return (
        <div className="row mt-3">
            <div className="col-md-4 col-9 mb-2">
                <h3>{props.eachProduct.name}
                </h3>
            </div>
            <div className="col-md-2 col-3">
                <h3><span className="badge bg-secondary">₹{props.eachProduct.price}</span></h3>
            </div>
            <div className="col-md-2 col-4">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary fw-bold" onClick={() => {
                        props.decrementQuantity(props.index);
                    }}>-</button>
                    <button type="button" className="btn btn-outline-primary">{props.eachProduct.quantity}</button>
                    <button type="button" className="btn btn-outline-primary fw-bold"
                        onClick={() => {
                            props.incrementQuantity(props.index);
                        }}>
                        +
                    </button>
                </div>
            </div>
            <div className="col-md-2 col-4">
                <h3><span className="badge bg-primary">{props.eachProduct.price * props.eachProduct.quantity}</span></h3>
            </div>
            <button className="btn btn-outline-warning btn-block col-md-2 col-4 " onClick={() => {
                props.removeItem(props.index)
            }}
            >
                Remove
            </button>
        </div>
    )
}
