import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import UserDetails from './UserDetails';
import './index.css';
import Form from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path = "/user/:data" component = {UserDetails} />
      <Route path = "/" component = {Form} />
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
