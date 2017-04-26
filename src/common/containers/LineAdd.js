import React, { Component } from 'react'
import { connect } from 'react-redux'
import { connectFirebase } from '../actions/Firebase'
import DailyReportComponent from '../components/DailyReport'
import Database from '../libs/Database'
import DateLib from '../libs/Date'
import LineApi from '../libs/LineApi'

export class DailyReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dailyList: [],
      chooseDate: '',
    }
  }

  componentDidMount() {
    this.connectDatabase()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.database !== this.props.database) {
      // console.log('ReRender', this.props)
      this.getList(nextProps.database)
    }
  }

  connectDatabase = () => {
    this.props.onConnectFirebase()
  }

  render() {
    const { team } = this.props
    return (
      <DailyReportComponent
        date={this.state.chooseDate}
        team={team}
        dailyList={this.state.dailyList}
        handleReport={this.handleReport}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firebase } = state
  const returnState = {}
  returnState.database = firebase
  return returnState
}

export default connect(
  mapStateToProps,
  {
    onConnectFirebase: connectFirebase,
  }
)(DailyReport)
