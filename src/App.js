import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import About from './components/routes/About'
import Contact from './components/routes/Contact'
import Home from './components/routes/Home'
import Nav from './components/shared/Nav'

const App = () => (
  <Fragment>
    <Route path='/' component={Nav} />
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
  </Fragment>
)

export default withRouter(App)