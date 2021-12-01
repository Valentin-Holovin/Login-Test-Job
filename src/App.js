import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginPage/>
      </div>
    </Provider>
  );
}

export default App;
