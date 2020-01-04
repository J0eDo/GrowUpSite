import React, { Component } from 'react';
import "./chat.scss";
/*Libarys */
import { connect } from 'react-redux'
/*Actions */
/* import { autorizated, registrated } from '../../API/api'
 */
/*Components */
import ContactPanel from './ContactPanel'
import Chat from './Chat'
import FlashMessage from '../ComponentsSimple/FlashMessage'


class RegistrationForm extends Component {

    state = {
        notifications: [],
        notificationCount: 0
    }


    componentDidMount() {
        //weakness
        setInterval(() => {
            this.setState({})
        }, 500);
    }


    render() {
        return (
            <div className="messager">
                <ContactPanel />
                <Chat />
                <div className="notifics">
                    {
                        this.props.notifications.map(element =>
                            <div
                                key={`keyNotific ${++this.state.notificationCount}`}
                                onClick={
                                    () => this.props.removeNortifications(element.id)}>
                                <FlashMessage
                                    bodyEvent={element}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({
        userName: state.user.userName,
        notifications: state.notifications.notifications
    }),
    dispatch => ({
        removeNortifications: (ID) => {
            dispatch({
                type: "PUSH_NOTIFICATION_REMOVE",
                notificationID: ID
            })
        }
    })
)(RegistrationForm);