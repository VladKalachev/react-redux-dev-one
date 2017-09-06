import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './index.css';


const root = (
    <Provider store={store}>
        <LocaleProvider locale={ruRU}>
            <App />
        </LocaleProvider>
    </Provider>
)

ReactDOM.render(root, document.getElementById('root'));

registerServiceWorker();
