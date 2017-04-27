import React from 'react'
import { Link } from 'react-router-dom'
import TextArea from './TextArea'
import InputText from './InputText'

const LineMsg = ({ handleSubmit, handleChange, list, group, message }) => (
  <form className="form-horizontal col-md-9 col-md-offset-1 col-xs-12" onSubmit={handleSubmit}>
    <InputText name="provider" type="hidden" defaultValue="line" />
    <div className="form-group">
      <label htmlFor="group" className="col-md-3 col-sm-2 control-label">Group</label>
      <div className="col-md-8 col-sm-10">
        <select className="form-control" name="group" id="group">
          <option value="">กรุณาเลือก</option>
          {
            list.map(item => (
              <option key={item.id} value={item.token}>{item.name}</option>
            ))
          }
        </select>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="message" className="col-md-3 col-sm-2 control-label">Message</label>
      <div className="col-md-8 col-sm-10" >
        <TextArea name="message" row="5" value={message} handleChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <div className="col-md-offset-3 col-md-9 col-xs-12">
        <button type="submit" className="btn btn-success">Submit</button>
        <Link to="/list" className="btn btn-default btn-list">Back</Link>
      </div>
    </div>
  </form>
)

export default LineMsg
