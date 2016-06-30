import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDiveLocation, fetchDiveLocationWeather } from '../actions/index';


class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term : ''
    }
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchDiveLocation(this.state.term)
    .then((data) => {
      this.props.fetchDiveLocationWeather(
        data.payload.data.results[0].geometry.location.lat,
        data.payload.data.results[0].geometry.location.lng
      );
    })
    this.setState({term: ''});
  }

  renderLocation(val) {
    console.log('GOT THE STATE IN CHECK', val);
    if(val.location && val.weather) {
      return (
        <div>
        <h1>Weather and Sea State for: <em>{val.location.results[0].formatted_address}</em></h1>
        <div><h3>Forecast: <em>{val.weather[0].hourly[4].weatherDesc[0].value}</em></h3></div>
        <div><h3>Max Temp: <em>{val.weather[0].maxtempF}&deg;F</em></h3></div>
        <div><h3>Max Temp: <em>{val.weather[0].mintempF}&deg;F</em></h3></div>
        <div><h3>Water Temp: <em>{val.weather[0].hourly[4].waterTemp_F}&deg;F</em></h3></div>
        <div><h3>Wave Height: <em>{val.weather[0].hourly[4].swellHeight_ft} ft</em></h3></div>
        <div><h3>Wind Speed: <em>{val.weather[0].hourly[4].windspeedMiles} mph</em></h3></div>
        <div><h3>Wind Dir: <em>{val.weather[0].hourly[4].winddir16Point}</em></h3></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit.bind(this)} className='input-group'>
      <input
      placeholder='Where would you like to dive?'
      className='form-control'
      value={this.state.term}
      onChange={this.onInputChange.bind(this)}
      type='text'/>
      <span className='input-group-btn'>
      <input type='submit' className='btn btn-secondary' value='Submit'/>
      </span>
      </form>
      {this.renderLocation(this.props.weather)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDiveLocation, fetchDiveLocationWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLocation);
