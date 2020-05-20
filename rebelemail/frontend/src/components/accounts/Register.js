// npm modules
import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';


// Register Component
export class Register extends Component {


    // Define propTypes
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    // Define component level state
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    };

    // Call actions when something happens 
    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;

        if (password === password2) {
            const newUser = {
                username,
                email,
                password
            }
            this.props.register(newUser);
        } else {
            this.props.createMessage({
                passwordMisMatch: "Passwords dont match!"
            });
        };
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
        const { username, email, password, password2 } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
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
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
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
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}


// take global state, and map to to local props
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    //register: state.auth.register
});

// connect(mapStateToProps, {action1, action2, ...})(Component);
export default connect(mapStateToProps, { register, createMessage })(Register);
