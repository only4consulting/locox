import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from '../actions/counterActions';

class HomeScreen extends Component {
  render() {
    console.log("LLEGUE AL MENOS", this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Esto es Home
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Card')}>
          <Text style={styles.welcome}>
            Ir a card
          </Text>
        </TouchableHighlight>
        <Text style={styles.welcome}>
          {this.props.counter.counter}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.doIncrementCounter(1)}>
          <Text style={styles.welcome}>
            Incrementar 1
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.doReset()}>
          <Text style={styles.welcome}>
            Reset
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.doDecrementCounter(1)}>
          <Text style={styles.welcome}>
            Decrementar 1
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  doIncrementCounter: (value) => dispatch(incrementCounter(value)),
  doDecrementCounter: (value) => dispatch(decrementCounter(value)),
  doReset: () => dispatch(resetCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
