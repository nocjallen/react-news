import axios from 'axios';
import React from 'react';
const api = require('../api.json')

export default class Stocks extends React.Component {
  state = {
    dia: '',
    spy: '',
    loaded: false
  }

  //API request is invoked once the element is mounted.
  componentDidMount() {
      axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=dia,spy&types=quote&token=${api.iexKey}`)
      .then(response => {
        const stocks = response.data
        //console.dir(stocks)
        this.setState({
          //SPDR ETFs for the Dow Jones and S&P 500.
          dia: stocks.DIA.quote,
          spy: stocks.SPY.quote,
          loaded: true
        })
      })
  }

  render() {
    return (
      <div className="stocks">
        {this.renderStocks()}
      </div>
    )
  }

  renderStocks() {
    if (this.state.loaded === true) {
      return (
        <div className="d-inline-block">
          <div className="stock">
            <div className="smallest-text font-weight-bold">SPDR<br/>Dow Jones</div>
            <div className="d-inline-block font-weight-bold small-text">{this.state.dia.latestPrice}</div>
          </div>
          <div className="stock">
            <div className="smallest-text font-weight-bold">SPDR<br/>S&P 500</div>
            <div className="d-inline-block font-weight-bold small-text">{this.state.spy.latestPrice}</div>
          </div>
        </div>
      )
    }
  }
}