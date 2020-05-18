import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmails, deleteEmail } from '../../actions/emails'

export class Emails extends Component {
    static propTypes = {
        emails: PropTypes.array.isRequired,
        getEmails: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getEmails();
    }

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

const mapStateToProps = state => ({
    emails: state.emails.emails
    // prop: reducer.state
});

export default connect(mapStateToProps, { getEmails, deleteEmail })(Emails);
