import React, { Component } from 'react';
import { connect } from 'react-redux'
import { connectFirebase } from '../actions/Firebase'
import { onChange } from '../actions/Field'
import DailyFormComponent from '../components/LineAdd';
import Database from '../libs/Database'
import DateLib from '../libs/Date'
import LineApi from '../libs/LineApi'

export class LineList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      yesterday: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name | nextProps.yesterday !== this.props.yesterday) {
      this.setState({
        yesterday: nextProps.yesterday
      });
    }
  }

  componentDidMount() {
    this.connectDatabase()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const result = this.props.database.saveData(
      e.target.name.value,
      e.target.yesterday.value,
      e.target.today.value,
      e.target.daily_date.value,
      e.target.team.value
    )
    if (result) {
      alert('บันทึกข้อมูลเรียบร้อย')
      this.sendToLine(e.target.name.value, e.target.yesterday.value, e.target.today.value)
      e.target.name.value = ''
      e.target.yesterday.value = ''
      e.target.today.value = ''
    } else {
      alert('บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    }
  }

  handleLastDo = (e, name) => {
    e.preventDefault()
    this.props.database.getYesterday(this.props.team, name)
    .then((result) => {
      const arr = []
      const data = result.val()
      console.log(data)
      this.setState({
        yesterday: data.today,
      })
    })
  }

  handleChange = (event, fieldName) => {
    // let state = {}
    // state[fieldName] = event.target.value
    // console.log(event.target.value)
    // this.setState(state)
    this.props.onChangeField(fieldName, event.target.value)
  }

  connectDatabase = () => {
    this.props.onConnectFirebase()
  }

  sendToLine(name, yesterday, today) {
    const msg = `\n${name}\nเมื่อวานทำอะไร\n${yesterday}\nวันนี้ทำอะไร\n${today}\n`
    console.log(msg)
    LineApi.lineNotify(msg)
    .then((lineResult) => {
      console.log(lineResult)
    })
  }

  render() {
    const { name, team } = this.props;
    return (
      <DailyFormComponent name={name} handleSubmit={this.handleSubmit} handleLastDo={this.handleLastDo} handleChange={this.handleChange} yesterday={this.state.yesterday} team={team} curDate={DateLib.getCurDate()} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firebase, field } = state
  let returnState = {}
  returnState['database'] = firebase
  returnState[field[0]] = field[1]
  return returnState
}


export default connect(
  mapStateToProps,
  { 
    onConnectFirebase: connectFirebase,
    onChangeField: onChange,
  }
)(LineList)
