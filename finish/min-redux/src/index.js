import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from './mini-redux/mini-redux';
import { counter } from './index.redux';
import { Provider } from './mini-redux/mini-react-redux';
import thunk from './mini-redux/mini-redux-thunk';
import arrThunk from './mini-redux/mini-redux-arrayThunk';

// 初始化redux
const store = createStore(counter, applyMiddleware(thunk, arrThunk));


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

registerServiceWorker();