import React, { Component } from 'react'
import { connect } from 'react-redux'
import { connectFirebase } from '../actions/Firebase'
import HeaderComponent from '../components/Header'
import Database from '../libs/Database'

export class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
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

  connectDatabase = () => {
    console.log('db')
    this.props.onConnectFirebase()
  }

  render() {
    return (
      <HeaderComponent />
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
)(Header)
