import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import AfterLoginPage from './pages/AfterLoginPage/AfterLoginPage';

function App() {
  
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path={"/AfterLoginPage"} component={() => <AfterLoginPage authorized={true}/>}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
