import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.sender_name) {
                alert.error(`Sender Name: ${error.msg.sender_name.join()}`);
            }
            if (error.msg.subject) {
                alert.error(`Subject: ${error.msg.subject.join()}`);
            }
            if (error.msg.body) {
                alert.error(`Body: ${error.msg.body.join()}`);
            }
        }

        if (message !== prevProps.message) {
            if (message.emailDeleted) {
                alert.success(message.emailDeleted);
            }
            if (message.emailAdded) {
                alert.success(message.emailAdded);
            }
        }

    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
