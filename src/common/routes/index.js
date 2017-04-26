import React from 'react'
import { Route } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import Header from '../components/Header'
import LineAdd from '../components/LineAdd'

const Routes = () => (
  <div>
    <Route component={Header} />
    <Route exact path="/list" component={PageNotFound} />
    <Route exact path="/add" component={LineAdd} />
  </div>
)

export default Routes
