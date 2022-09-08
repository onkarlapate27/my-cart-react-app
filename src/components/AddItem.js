
import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        }
    }
    render() {
        return (
            <form className='row mb-5' onSubmit={(e)=>{
                e.preventDefault();
                this.props.addItem(this.state.productName, Number(this.state.productPrice));
                this.setState({
                    productName: "",
                    productPrice: "",
                })
            }}>
                <div className="form-group col-md-6 col-12 mb-2">
                    <label className='fs-5' htmlfor="productName">Name of Product</label>
                    <input required type="text" className="form-control" id="productName" aria-describedby="emailHelp" name='productName' placeholder="iPhone"
                        onChange={(e) => {
                            this.setState({ productName: e.currentTarget.value });
                        }}
                        value={this.state.productName}
                    />
                </div>
                <div className="form-group col-md-4 col-12 mb-4">
                    <label className='fs-5' htmlfor="productPrice">Price</label>
                    <input required type="number" className="form-control" name='productPrice' id="productPrice" placeholder="₹50000"
                        onChange={(e) => {
                            this.setState({ productPrice: e.currentTarget.value });
                        }}
                        value={this.state.productPrice}
                    />
                </div>
                <button type="submit" className="btn btn-dark text-white col-md-2 col-6 m-auto fs-5"> Add Item </button>
            </form>
        )
    }
}
