import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store'
import {articles} from './fixtures'
import registerServiceWorker from './registerServiceWorker';

import './index.css';


const root = (
    <Provider store={store}>
            <App articles = {articles} />
    </Provider>
)

ReactDOM.render(root, document.getElementById('root'));

registerServiceWorker();
