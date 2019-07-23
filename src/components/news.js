import axios from 'axios';
import React from 'react';
const api = require('../api.json')

export default class News extends React.Component {
  state = {
    articles: '',
    loaded: false
  }

  //API request is invoked once the element is mounted.
  componentDidMount() {
    let query = 'https://newsapi.org/v2/top-headlines?country=us'
    if (this.props.category === 'business') {
      query += '&category=business'
    }

    if (this.props.category === 'health') {
      query += '&category=health'
    }

    if (this.props.category === 'science') {
      query += '&category=science'
    }

    if (this.props.category === 'technology') {
      query += '&category=technology'
    }
    
    query += `&apiKey=${api.newsKey}`
    //console.log(query)
    axios.get(query)
    .then(response => {
      const news = response.data
      //console.dir(news.articles)
      this.setState({
        articles: news.articles,
        loaded: true
      })
    })
  }

  render() {
    return (
      <div className="container col-md-8 col-lg-6">
        {this.renderNews()}
      </div>
    )
  }

  renderNews() {
    if (this.state.loaded === true) {
      return this.state.articles.map((article, index) => 
        <div key={index} className="news-article w-100">
          <div className="d-inline">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img alt="" className="news-image" src={article.urlToImage}></img>
            </a>
          </div>
          <div className="d-inline">
            <a className="news-link" href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </div>
        </div>
      )
    }
  }
}