// npm modules
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';

// layouts
import Header from './layout/Header';
import Alerts from './layout/Alerts';

// components
import Dashboard from './emails/Dashboard';
import Register from './accounts/Register';
import Login from './accounts/login';

// actions
import { loadUser } from '../actions/auth';

// extra
import PrivateRoute from './common/PrivateRoute';
import store from '../store';


// Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
};

// Main
class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }



    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));