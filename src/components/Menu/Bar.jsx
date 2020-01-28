import React, { Component } from 'react';
import './menu.scss'
//Libarys
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
//MaterialUI
import Badge from '@material-ui/core/Badge';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PublicIcon from '@material-ui/icons/Public';
import MailIcon from '@material-ui/icons/Mail';


class MenuBar extends Component {

    messages(unread) {
        const unreadCount = unread.length
        return (
            <Badge className="bar_element__small" badgeContent={unreadCount} color="secondary">
                <MailIcon />
            </Badge>)
    }

    onlineIndicator(char) {
        return (
            <Badge className="bar_element__small" color="secondary">
                <PublicIcon id="online_indicator" />
            </Badge>)
    }

    notification(notifications) {
        const count = notifications.length
        return (
            <Badge className="bar_element__small" badgeContent={count} color="secondary">
                <NotificationsIcon />
            </Badge>)
    }

    usersOnline(countUser) {
        let count = countUser.length
        return (
            <Badge className="bar_element__small" >
                <span style={{margin: "auto"}}>ONLINE : {count} </span>
            </Badge>)
    }

    account() {
        return (
            <Badge className="bar_element" color="primary">
                <NavLink to="/"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                    <AccountCircleIcon color="secondary" fontSize="large" />
                </NavLink>
            </Badge>
        )
    }

    render() {
        return (
            <React.Fragment >
                {this.usersOnline(this.props.usersOnline)}
                {this.notification(this.props.notifications)}
                {this.messages(this.props.unread)}
                {this.onlineIndicator(" ")}
                {this.account()}
            </React.Fragment>
        )
    }

}

export default connect(
    state => ({
        usersOnline : state.webSocket.usersOnline,
        notifications: state.notifications.notifications,
        unread: state.chat.unread
    }),
    dispatch => ({

    })
)(MenuBar);
