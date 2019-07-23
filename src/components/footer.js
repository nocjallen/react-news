import React from 'react';

export default class Footer extends React.Component {
  
  //API attribution links.
  render() {
    return(
      <div className="container col-md-8 col-lg-6 small-text text-center">
        Powered by <a className="footer-link small-text" href="https://newsapi.org" target="_blank" rel="noopener noreferrer">News API</a>,
        <a className="footer-link small-text" href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer"> Open Weather Map</a>, and
        <a className="footer-link small-text" href="https://iexcloud.io/docs/api/" target="_blank" rel="noopener noreferrer"> IEX Cloud</a>.
      </div>
    )
  }
}