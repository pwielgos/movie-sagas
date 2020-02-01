import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Details from '../Details/Details'
import Home from '../Home/Home'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/details" component={Details} />
        <Route path="/" exact component={Home} />
        </div>
        </Router>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
  reduxState: reduxState
}}

export default connect(mapStateToProps)(App);
