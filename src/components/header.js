import React from 'react';
import { NavLink } from 'react-router-dom'
import Stocks from './stocks.js'
import Weather from './weather.js'

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-sm justify-content-center">
          <div className="container col-md-8 col-lg-6">
            <NavLink className="navbar-brand" to='/'>React News</NavLink>
            <button className="navbar-toggler navbar-toggler-right my-2" type="button" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-column" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/business'>Business</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/health'>Health</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/science'>Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/technology'>Technology</NavLink>
                </li>
              </ul>
              <ul className="flex-row navbar-nav">
                <li className="nav-item">
                  <Stocks />
                </li>
                <li className="d-inline-block mt-auto mb-auto nav-item">
                  <Weather />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}