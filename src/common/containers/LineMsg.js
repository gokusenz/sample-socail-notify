import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onChange } from '../actions/Field'
import { connectFirebase } from '../actions/Firebase'
import LineMsgComponent from '../components/LineMsg'
import Database from '../libs/Database'
import LineApi from '../libs/LineApi'

export class LineMsg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      provider: 'line',
      list: [],
    }
  }

  componentDidMount() {
    this.connectDatabase()
  }

  connectDatabase = () => {
    this.props.onConnectFirebase()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.database !== this.props.database) {
      this.database = nextProps.database
      this.getList()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('ส่งข้อมูลเรียบร้อย')
    this.sendMesage(e.target.group.value, e.target.message.value)
    e.target.message.value = ''
  }

  handleChange = (event, fieldName) => {
    this.props.onChangeField(fieldName, event.target.value)
  }

  sendMesage(group, message) {
    LineApi.lineNotify(group, message)
    .then((lineResult) => {
      console.log(lineResult)
    })
  }

  getList = () => {
    this.database.getList(this.state.provider)
    .then((result) => {
      const arr = []
      const r = result.val()
      for (const i in r) {
        arr.push({ id: i, ...r[i] })
      }
      this.setState({
        list: arr,
      })
    })
  }

  render() {
    return (
      <LineMsgComponent 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
        list={this.state.list}
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
    onConnectFirebase: connectFirebase,
  }
)(LineMsg)
