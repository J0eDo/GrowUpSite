import React, { Component } from 'react';
import "./chat.scss";
/*Libarys */
import { connect } from 'react-redux'
/*Actions */
import { addNotification } from '../../actions/notification'
/*Components */
import ContactPanel from './ContactPanel'
import Chat from './Chat'
import FlashMessage from '../ComponentsSimple/FlashMessage'
import { getUserData } from '../../API/userProfile'

let countNortification = 0;


class RegistrationForm extends Component {

    state = {
        panelOpen: true
    }


    componentDidMount() {
        this.props.getData()
        this.contactPanel = document.getElementById("contactPanel")
        //weakness
        setInterval(() => {
            this.setState({})
        }, 500);
        //

    }



    nortifications(events) {
        return (
            events.map(element =>
                <div
                className = "notification_conteiner"
                    key={`keyNotific ${++countNortification}`}
                    onClick={
                        () => this.props.removeNortifications(element.id)}>
                    <FlashMessage
                        bodyEvent={element}
                    />
                </div>
            )
        )
    }

    panelVisible = () => {
        if (this.state.panelOpen) {
            this.contactPanel.classList.remove("visiblePanel")
            this.contactPanel.classList.add("unvisiblePanel")
            this.setState({ panelOpen: false })
        } else {
            this.contactPanel.classList.remove("unvisiblePanel")
            this.contactPanel.classList.add("visiblePanel")
            this.setState({ panelOpen: true })
        }
    }

    render() {
        return (
            <div className="messager">
                <ContactPanel /> 
                <Chat panelVisible={this.panelVisible.bind(this)} />
                <div className="notification_conteiner">
                    {
                        this.nortifications(this.props.notifications)
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

        },
        addNotification: (nortific) => dispatch(addNotification(nortific)),
        getData: () => dispatch(getUserData()),
    })
)(RegistrationForm);