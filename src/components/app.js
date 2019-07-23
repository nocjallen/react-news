
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header.js'
import News from './news.js'
import Footer from './footer.js'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route exact path="/" component={News} />
        <Route path="/business" render={ () => <News category='business' /> } />
        <Route path="/health" render={ () => <News category='health' /> } />
        <Route path="/science" render={ () => <News category='science' /> } />
        <Route path="/technology" render={ () => <News category='technology' /> } />
        <Footer />
      </div>
    </BrowserRouter>
  );
}