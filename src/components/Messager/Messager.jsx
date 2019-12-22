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


class RegistrationForm extends Component {

    render() {
        return (
            <div className="messager">
                <ContactPanel/>
                <Chat/>
            </div>
        )
    }
}


export default connect(
    state => ({ userName: state.user.userName }),
    dispatch => ({})
)(RegistrationForm);