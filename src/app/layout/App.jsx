import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Container className='main'>
          <NavBar/>
          <EventDashboard/>   
        </Container>
      </Fragment>  
  );}
  
}

export default App;
