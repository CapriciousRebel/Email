// npm modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { getEmails, deleteEmail } from '../../actions/emails';

// Email Component 
export class Emails extends Component {

    // Define propTypes
    static propTypes = {
        emails: PropTypes.array.isRequired,
        getEmails: PropTypes.func.isRequired
    }

    // When component mounts onto the app
    componentDidMount() {
        this.props.getEmails();
    }

    // render method
    render() {
        return (
            <>
                <h1>List of Emails</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sender</th>
                            <th>Subject</th>
                            <th>Body</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.emails.map(email => (
                            <tr key={email.id}>
                                <td>{email.id}</td>
                                <td>{email.sender_name}</td>
                                <td>{email.subject}</td>
                                <td>{email.body}</td>
                                <td><button
                                    className="btn btn-danger btn-sm"
                                    onClick={this.props.deleteEmail.bind(this, email.id)}>
                                    Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </>
        );
    }
}

// take global state, and map to to local props
const mapStateToProps = state => ({
    // prop: reducer.state
    emails: state.emails.emails
});

export default connect(mapStateToProps, { getEmails, deleteEmail })(Emails);
