import axios from 'axios';
import React from 'react';
const api = require('../api.json')

export default class Weather extends React.Component {
  state = {
    icon: '',
    lat: '',
    location: '',
    lon: '',
    temp: '',
    loaded: false
  }

  //API request is invoked once the element is mounted.
  componentDidMount() {
    this.getLocation();
  }

  convertKelvinToF(temp) {
    return (Math.round(((temp - 273.15) * 9/5 + 32)) + String.fromCharCode(176) + 'F')
  }

  //Starting with Chrome 50, geolocation requires HTTPS and is unsupported over HTTP.
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lat: position.coords.latitude.toFixed(3),
          lon: position.coords.longitude.toFixed(3)
        })
        this.getWeather()
      })
    }
  }

  getWeather() {
    let query = 'https://api.openweathermap.org/data/2.5/weather?'
    query += `lat=${this.state.lat}&lon=${this.state.lon}`
    query += `&APPID=${api.weatherKey}`
    //console.log(query)
    axios.get(query)
    .then(response => {
      const weather = response.data
      //console.dir(weather)
      this.setState({
        icon: weather.weather[0].icon,
        location: weather.name,
        temp: weather.main.temp,
        loaded: true
      })
    })
  }

  render() {
    return (
      <div className="small-text weather">
        {this.renderWeather()}
      </div>
    )
  }

  renderWeather() {
    if (this.state.loaded === true) {
      return (
        <div>
          {this.state.location}
          <img alt="" className="weather-icon" src={'http://openweathermap.org/img/w/' + this.state.icon + '.png'} />
          {this.convertKelvinToF(this.state.temp)}
        </div>
      )
    }
  }
}