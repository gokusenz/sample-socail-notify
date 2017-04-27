import React, { Component } from 'react';
import { connect } from 'react-redux'
import { connectFirebase } from '../actions/Firebase'
import LineListComponent from '../components/LineList';
import Database from '../libs/Database'
import ConfigDB from '../libs/ConfigDB'

export class LineList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      provider: 'line',
      list: [],
    }
    this.database = new Database(ConfigDB)
  }

  componentDidMount() {
    this.getList()
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
      <LineListComponent provider={this.state.provider} list={this.state.list} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}


export default connect(
  mapStateToProps,
  { 
  }
)(LineList)
