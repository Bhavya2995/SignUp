import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './UserDetails';
import './index.css';
import Form from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form/>
, document.getElementById('root'));
registerServiceWorker();
