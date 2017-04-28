import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onChange } from '../actions/Field'
import { getGroup } from '../actions/GetGroup'
import LineAddComponent from '../components/LineAdd'
import Database from '../libs/Database'

export class LineAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      token: '',
    }
    this.database = new Database()
  }

  componentDidMount() {
    if(this.props.match.params.id !== undefined) {
      this.props.getGroup('line', this.props.match.params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.data !== nextProps.data) {
      console.log(nextProps.data.group)
      const group = nextProps.data.group
      if(group !== undefined) {
        console.log('name ', group.name)
        this.setState({
          name: group.name,
          token: group.token,
          description: group.description,
        })
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const result = this.database.saveGroup(
      e.target.name.value,
      e.target.token.value,
      e.target.description.value,
      e.target.provider.value,
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
      e.target.name.value = ''
      e.target.token.value = ''
      e.target.description.value = ''
      // window.location.href = "/list"
    } else {
      alert('บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    }
  }

  handleChange = (event, fieldName) => {
    let state = {}
    state[fieldName] = event.target.value
    this.setState(state)
    // this.props.onChangeField(fieldName, event.target.value)
  }

  render() {
    return (
      <LineAddComponent 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
        name={this.state.name} 
        description={this.state.description}
        token={this.state.token}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { field, group } = state
  const returnState = {}
  returnState[field[0]] = field[1]
  returnState['data'] = group
  return returnState
}

export default connect(
  mapStateToProps,
  {
    onChangeField: onChange,
    getGroup: getGroup,
  }
)(LineAdd)
