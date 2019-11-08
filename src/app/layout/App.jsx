import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/users/PeopleDashboard/PeopleDashboard'
import SettingsDashboard from '../../features/users/Settings/SettingsDashboard'
import UserDetailedPage from '../../features/users/UserDetailed/UserDetailedPage'
import EventForm from '../../features/events/EventForm/EventForm';
import TestComponent from '../../features/testArea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';



class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path='/(.+)'
          render={() => (
            <Fragment>
              <Container className='main'>
                <Switch key={this.props.location.key} >
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={EventForm}
                  />
                  <Route path='/test' component={TestComponent} />
                </Switch>

                <NavBar />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    )}
  
}

export default withRouter(App);
