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

  check(val) {
    console.log('GOT THE STATE IN CHECK', val);
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
      {this.check(this.props.weather)}
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
