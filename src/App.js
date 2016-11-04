import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import RangeSelector from './components/range-selector/range-selector';
import logo from './logo.svg';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <RangeSelector />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
