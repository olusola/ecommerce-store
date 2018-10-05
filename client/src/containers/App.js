import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppContainer from './AppContainer'
import CheckoutContainer from './CheckoutContainer/CheckoutContainer'
import SuccessContainer from './SuccessContainer/SuccessContainer'

class App extends Component {

  render() {
    return (
      <Switch>
      <Route exact path='/' component={AppContainer}></Route>
      <Route exact path='/checkout' component={CheckoutContainer}></Route>
      <Route exact path='/success' component={SuccessContainer}></Route>
    </Switch>
    )
  }
}

export default App
