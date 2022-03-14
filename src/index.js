import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import './helpers/cookie.js';

window.token = window.cookie.get('token');
render(<Router><App /></Router>, document.getElementById('root'));
