import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './emails/Dashboard';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';
import store from '../store';


// Alert
const alertOptions = {
    timeout: 3000,
    position: 'top center',
};

// Main
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className='container'>
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>

            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));