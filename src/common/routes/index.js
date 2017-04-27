import React from 'react'
import { Route } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import Header from '../containers/Header'
import LineAdd from '../containers/LineAdd'
import LineMsg from '../containers/LineMsg'
import LineList from '../containers/LineList'

const Routes = () => (
  <div>
    <Route component={Header} />
    <Route exact path="/list" component={LineList} />
    <Route exact path="/edit/:id" component={LineAdd} />
    <Route exact path="/add" component={LineAdd} />
    <Route exact path="/message" component={LineMsg} />
  </div>
)

export default Routes
