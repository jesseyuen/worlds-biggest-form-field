import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BiggestFormField from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BiggestFormField />, document.getElementById('app'));

registerServiceWorker();
