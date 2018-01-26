import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';

import PostListContainer from './containers/PostListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
