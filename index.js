import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import App from './src/App';

// Crear store
const store = configureStore();

//Create a Component
const AppContainer = () => {
  console.log("Estoy en el index");
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('locox', () => AppContainer);