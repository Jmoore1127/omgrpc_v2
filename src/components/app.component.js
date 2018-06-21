import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { store } from '../redux';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello, Electron!</h1>

          <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off left!</p>
        </div>
      </Provider>
    )
  }
}
