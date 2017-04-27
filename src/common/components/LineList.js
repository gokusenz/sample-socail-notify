import React from 'react'
import { Link } from 'react-router-dom'

const LineList = ({ provider, list }) => (
  <div className="main-grid">
    <div className="col-xs-8 col-md-10">
      <h3 className="title-menu">Line List</h3>
    </div>
    <div className="col-xs-4 col-md-2">
      <Link to="/add" className="btn btn-success">
        เพิ่มข้อมูล
      </Link>
      <Link to="/message" className="btn btn-warning btn-list">
        ส่งข้อความ
      </Link>
    </div>
    <div className="table-responsive col-xs-12">
      <table className="table">
        <thead>
          <tr>
            <td>name</td>
            <td>token</td>
            <td>description</td>
            <td>#</td>
          </tr>
        </thead>
        <tbody>
          {
            list.map(item => (
              <tr key={item.id}>
                <td>{ item.name }</td>
                <td>{ item.token }</td>
                <td>{ item.description }</td>
                <td>
                  <Link to="#">
                    Edit
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
)

export default LineList
