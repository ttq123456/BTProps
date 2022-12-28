import React, { Component } from 'react'

export default class ThongTinChiTiet extends Component {
  render() {
    let {shoeCT} = this.props
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết sản phẩm</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img src={shoeCT.image} alt="" style={{width:'150px'}}/>
                  </div>
                  <div className="col-8">
                    <ul className="list-group">
                      <li class="list-group-item">Tên sản phẩm: {shoeCT.name}</li>
                      <li class="list-group-item">Giá tiền: {shoeCT.price} $</li>
                      <li class="list-group-item">Mô tả: {shoeCT.description}</li>
                      <li class="list-group-item">Số lượng còn lại: {shoeCT.quantity}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
