import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../../actions/emails'

export class Form extends Component {
    static propTypes = {
        addEmail: PropTypes.func.isRequired
    }

    state = {
        sender_name: '',
        subject: '',
        body: ''
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const { sender_name, subject, body } = this.state;
        const email = { sender_name, subject, body };
        this.props.addEmail(email);
        this.setState({
            sender_name: '',
            subject: '',
            body: '',
        })
    }

    render() {
        const { sender_name, subject, body } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Email</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Sender Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="sender_name"
                            onChange={this.onChange}
                            value={sender_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            className="form-control"
                            type="text"
                            name="subject"
                            onChange={this.onChange}
                            value={subject}
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="body"
                            onChange={this.onChange}
                            value={body}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

// Since we are only calling an action here, we dont need to bring the emails back in from the state
// hence, mapStateToProps is not needed

//const mapStateToProps = state => ({
//emails: state.emails.emails
// prop: reducer.state
//});

export default connect(null, { addEmail })(Form);

