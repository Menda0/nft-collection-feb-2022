import React from 'react';
import {
  Component1, 
  Component2, 
  Component3, 
  Component4, 
  Component5, 
  Component6, 
  Component7, 
  Component8,
  Component9
} from './components';
import { Layout } from './layout';

// class App extends React.Component {
//   render(){
//     return (
//       <>
//         <Component1 />
//         <Component1 />
//         <Component2 />
//         <Component3 />
//         <Component4 message='Hello Marco Mendao'/>
//         <Component5 defaultMessage='Hello Marco Mendao'/>
//         <Component6 />
//         <Component7 />
//         <Component8 message='This is a functional Component' />
//         <Component9 message='This is a default message' />
//       </>
//     )
//   }
// }

const App = () => {
  return <Layout />
}

export default App