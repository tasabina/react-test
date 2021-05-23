import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Dashboard from './containers/Dashboard/Dashboard'
import {Redirect, Route, Switch} from 'react-router-dom'
import TicketCreator from './containers/TicketCreator/TicketCreator'
import DashboardCreator from './containers/DashboardCreator/DashboardCreator'
import Ticket from './containers/Ticket/Ticket'
import Profile from './containers/Profile/Profile'

class App extends Component {
    render() {
      let routes = (
        <Switch>
          <Route path="/tiket/:id" component={Ticket}/>
          <Route path="/tiket-creator/" component={TicketCreator}/>
          <Route path="/dashboard-creator/" component={DashboardCreator}/>
          <Route path="/profile/" component={Profile}/>
          <Route path="/" exact component={Dashboard}/>
          <Redirect to="/" />
        </Switch>
      )
      return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default App;
