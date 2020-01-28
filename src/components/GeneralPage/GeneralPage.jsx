/*Libarys */
import React, { Component } from 'react'
import './generalPage.scss'
import { connect } from 'react-redux'
/*Component*/
import RegistrationForm from "../RegistrationForm/Auth"
import UserPanel from "../UserPanel/UserPanel"


class GeneralPage extends Component {

    loginUser(token) {
        if (!token) {
            return (
                <RegistrationForm />
            )
        } else {
            return (
                <UserPanel />
            )
        }
    }

    render() {
        return (
            <div className="generalPage">
                    {
                        this.loginUser(this.props.user.token)
                    }
            </div>
        )
    }
}



export default connect(
    state => ({ user: state.user }),
    disputch => ({

    })
)(GeneralPage);