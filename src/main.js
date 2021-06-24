import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from "./components/error-boundry";
import Service from './services/service';
import Context from './components/context'; 
import store from './store';

const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Context.Provider value={service}>
                <Router>
                    <App/>
                </Router>
            </Context.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));