import React from 'react';
import {Component1, Component2, Component3, Component4, Component5} from './components';

class App extends React.Component {
  render(){
    return (
      <>
        <Component1 />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 message='Hello Marco Mendao'/>
        <Component5 />
      </>
    )
  }
}

export default App