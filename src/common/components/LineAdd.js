import React from 'react'
import { Link } from 'react-router-dom'
import InputText from './InputText'
import TextArea from './TextArea'

const LineAdd = ({ handleSubmit, handleChange, name, description, token }) => (
  <form className="form-horizontal col-md-9 col-md-offset-1 col-xs-12" onSubmit={handleSubmit}>
    <InputText name="provider" type="hidden" defaultValue="line" />
    <div className="form-group">
      <label htmlFor="name" className="col-md-3 col-sm-2 control-label">Name</label>
      <div className="col-md-8 col-sm-10" >
        <InputText name="name" type="text" handleChange={handleChange} value={name} />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="token" className="col-md-3 col-sm-2 control-label">Token <a href="https://kittipongint.com/line-notify-simple-without-coding/" rel="noopener noreferrer" target="_blank">(Find Token?)</a></label>
      <div className="col-md-8 col-sm-10" >
        <InputText name="token" type="text" handleChange={handleChange} value={token} />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="description" className="col-md-3 col-sm-2 control-label">Description</label>
      <div className="col-md-8 col-sm-10" >
        <TextArea name="description" row="5" value={description} handleChange={handleChange} />
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

export default LineAdd
