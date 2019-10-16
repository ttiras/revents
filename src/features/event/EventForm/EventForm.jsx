import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }

  componentDidMount () {
    if (this.props.selectedEvent !== null){
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    if (this.state.id) {
      this.props.updateEvent(this.state)
    } else {
      this.props.createEvent(this.state)
    }
  }

  handleInputForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

    render() {
        const { formToggle } = this.props
        const {title, date, city, venue, hostedBy} = this.state
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                          name='title'
                          value= {title}
                          onChange={this.handleInputForm}
                          placeholder="Event Title" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input 
                        name='date'
                        value= {date}
                        onChange={this.handleInputForm}
                        type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input 
                        name='city'
                        value= {city}
                        onChange={this.handleInputForm}
                        placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input 
                        name='venue'
                        value= {venue}
                        onChange={this.handleInputForm}
                        placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input 
                        name='hostedBy'
                        value= {hostedBy}
                        onChange={this.handleInputForm}
                        placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={formToggle} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm 