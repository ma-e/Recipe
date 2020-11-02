import React from 'react';
import './App.css';
import Menu from './component/Menu';
import Recipe from './component/Recipe';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Recipe />
        <Menu />
      </div>
    </Provider>
  );
}

export default App;
