import React, { Component } from 'react';
import Search from './Search'
import Video from './Video'

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
         <Search />
         <Video />
      </div>

    );
  }
}
