import React, { Component } from 'react';
import { connect } from 'react-redux'
import RootStack from './routes/RootStack';

class App extends Component {
  render() {
    console.log("Este es el store", this.props);
    return <RootStack />
  }
}

const mapStateToProps = state => ({
  st: state
});

const mapDispatchToProps = dispatch => ({
  dis: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
