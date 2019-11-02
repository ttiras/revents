import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementCounter, decrementCounter} from './TestActions'
import { Button } from 'semantic-ui-react'
import TestPlaceInput from '../TestPlaceInput'
import SimpleMap from './SingleMap'
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

const mapStateToProps = (state) => ({
    data: state.test.data
})

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    state = {
        latlng: {
            lat: 59.95,
            lng: 30.33
        }
    }

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => this.setState({
              latlng: latLng
          }))
          .catch(error => console.error('Error', error));
      };

    render(){
        const { incrementCounter, decrementCounter} = this.props
        return (
            <div>
                <h1>Test Components</h1>
                <h3>
                    The answer is {this.props.data}
                </h3>
                <Button onClick={incrementCounter} positive content='Increment' />
                <Button onClick={decrementCounter} negative content='Decrement' />

                <br/>
                <br/>
                <TestPlaceInput selectAddress={this.handleSelect} />
                <SimpleMap key={this.state.latlng.lat} latlng={this.state.latlng}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
