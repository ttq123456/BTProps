import React, { Component } from 'react'

export default class ShoeItem extends Component {
    render() {
        let {shoe} = this.props;
        //console.log(shoe);
        return (
            <div className="card" style={{ height: '100%' }} >
                <img className="card-img-top" src={shoe.image} alt=".." style={{ width: '100%' }} />
                <div className="card-body">

                    <h4 className="card-title" style={{ height: '70px' }}>{shoe.name}</h4>
                    <p className="card-text">{shoe.price} $</p>
                    <div className='d-flex'>
                        <button className='btn btn-danger mx-2' style={{fontSize: '12px'}}>Add to cart</button>
                        <button className='btn btn-info' data-toggle="modal" data-target="#exampleModal" style={{fontSize: '12px'}} onClick={() => {
                            this.props.xemThongTinCT(this.props.shoe)
                        }}>Xem chi tiết</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
