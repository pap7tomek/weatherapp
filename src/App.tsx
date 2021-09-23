import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { Form } from './components/form/Form';
import { List } from './components/list/List';
import { Result } from './components/result/Result';


const App: React.FC = () => (
  <Provider store={store}>

    <div className="App-header">
      <div className="Form">
        <Form/>
        <List/>
      </div>
     
      <div className="Result">
        <Result/>
      </div>
    </div>
    
    
    
  </Provider>
);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
