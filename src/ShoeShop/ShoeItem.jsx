import React, { Component } from 'react'

export default class ShoeItem extends Component {
    render() {
        let {shoe} = this.props;
        return (
            <div className="card" style={{ height: '100%' }} >
                <img className="card-img-top" src={shoe.image} alt style={{ width: '100%' }} data-toggle="modal" data-target="#exampleModal" />
                <div className="card-body">

                    <h4 className="card-title" style={{ height: '70px' }}>{shoe.name}</h4>
                    <p className="card-text">{shoe.price} $</p>
                    <button className='btn btn-dark'>Add to cart</button>
                </div>
            </div>
        )
    }
}
