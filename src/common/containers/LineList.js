import React, { Component } from 'react';
import { connect } from 'react-redux'
import { connectFirebase } from '../actions/Firebase'
import LineListComponent from '../components/LineList';

export class LineList extends Component {

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
  const { firebase } = state
  let returnState = {}
  returnState['database'] = firebase
  return returnState
}


export default connect(
  mapStateToProps,
  { 
    onConnectFirebase: connectFirebase,
  }
)(LineList)
