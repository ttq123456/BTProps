import React, { Component } from 'react'
import ShoeItem from './ShoeItem'

export default class ShoeList extends Component {

    renderShoeList() {
        return this.props.shoeList.map((shoe) => {
          return <div className="col-4 my-3" key={shoe.id}>
            <ShoeItem shoe={shoe}/>
          </div>
        })
      }
  render() {
    return (
        <div className="row">
            {this.renderShoeList()}
        </div>
    )
  }
}
