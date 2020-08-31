import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router/AppRouter';
console.log('Pleaded');
const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<AppRouter />, wrapper) : false;
