import React, { Component } from 'react'
import { connect } from 'react-redux'
import {asyncIncrement, asyncDecrement} from './TestActions'
import { Button } from 'semantic-ui-react'
import TestPlaceInput from '../TestPlaceInput'
import SimpleMap from './SimpleMap'
import {openModal} from '../modals/modalActions'
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
})

const mapDispatchToProps = {
    asyncIncrement,
    asyncDecrement,
    openModal
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
        const {
          data,
          asyncIncrement,
          asyncDecrement,
          openModal,
          loading,
          buttonName
        } = this.props;
        return (
          <div>
            <h1>Test Components</h1>
            <h3>The answer is {data}</h3>
            <Button
              name='increment'
              loading={buttonName === 'increment' && loading}
              onClick={(e)=>asyncIncrement(e.target.name)}
              positive
              content='Increment'
            />
            <Button
              name='decrement'
              loading={buttonName === 'decrement' && loading}
              onClick={(e)=>asyncDecrement(e.target.name)}
              negative
              content='Decrement'
            />
            <Button
              onClick={() => openModal("TestModal", { data: 42 })}
              color='teal'
              content='Open Modal'
            />

            <br />
            <br />
            <TestPlaceInput selectAddress={this.handleSelect} />
            <SimpleMap key={this.state.latlng.lat} latlng={this.state.latlng} />
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
