import React from 'react'
import { Route } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import Header from '../components/Header'

const Routes = () => (
  <div>
    <Route component={Header} />
    <Route exact path="/list" component={PageNotFound} />
    <Route exact path="/add" component={PageNotFound} />
  </div>
)

export default Routes
