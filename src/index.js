import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import AppContext from './context';

ReactDOM.render(<AppContext>
    <App />
  </AppContext>, document.getElementById('root'));
