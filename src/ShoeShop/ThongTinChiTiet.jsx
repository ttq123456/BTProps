import React, { Component } from 'react'

export default class ThongTinChiTiet extends Component {
  render() {
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
              <ul class="list-group">
                <li class="list-group-item">Tên sản phẩm</li>
                <li class="list-group-item">Giá tiền</li>
                <li class="list-group-item">Mô tả</li>
                <li class="list-group-item">Short mô tả</li>
                <li class="list-group-item">Số lượng còn lại</li>
              </ul>
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
