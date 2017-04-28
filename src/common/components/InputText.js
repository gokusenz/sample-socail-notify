import React from 'react'

const InputText = ({ name, type, defaultValue, handleChange, value }) => (
  <input type={type} className="form-control" name={name} id={name} defaultValue={defaultValue} value={value} onChange={e => handleChange(e, name)} required />
)

export default InputText
