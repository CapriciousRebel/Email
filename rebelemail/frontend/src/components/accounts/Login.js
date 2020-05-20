// npm modules
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

// actions
import { login } from '../../actions/auth';


// Login Component
export class Login extends Component {

    // Define propTypes
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    // Define component level state
    state = {
        username: '',
        password: '',
    }

    // Call actions when something happens 
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });


    // render method
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        // take the state and de-structure it to pass in the 'value' attribute
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p>
                            Dont have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

// take global state, and map to to local props
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

// connect(mapStateToProps, {action1, action2, ...})(Component);
export default connect(mapStateToProps, { login })(Login);
