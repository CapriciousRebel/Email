// npm modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { logout } from '../../actions/auth';


// Header Component
export class Header extends Component {

    // declare the propTypes
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    // Render function
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={this.props.logout}
                    >
                        Logout
                    </button>

                    <span className="navbar-text ml-3">
                        <strong>
                            {user ? `Welcome ${user.username}` : ''}
                        </strong>
                    </span>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">RebelEmail!</a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
