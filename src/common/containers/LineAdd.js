import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onChange } from '../actions/Field'
import LineAddComponent from '../components/LineAdd'
import Database from '../libs/Database'

export class LineAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const result = this.props.database.saveGroup(
      e.target.name.value,
      e.target.token.value,
      e.target.description.value,
      e.target.provider.value,
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
    } else {
      alert('บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    }
  }

  handleChange = (event, fieldName) => {
    this.props.onChangeField(fieldName, event.target.value)
  }

  render() {
    return (
      <LineAddComponent 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firebase, field } = state
  const returnState = {}
  returnState[field[0]] = field[1]
  returnState['database'] = firebase
  return returnState
}

export default connect(
  mapStateToProps,
  {
    onChangeField: onChange,
  }
)(LineAdd)
