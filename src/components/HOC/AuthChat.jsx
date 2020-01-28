import React from 'react';
import Auth from '../RegistrationForm/Auth'
import Messager from '../Messager/Messager'
//Libarys 
import { connect } from 'react-redux'




class Chat extends React.Component {

    render() {
        if (!this.props.isAuth) {
            return <Auth/>
        }
        return <Messager/>
    }
}

export default connect(
    state => ({
        isAuth: state.user.auth
    })
)(Chat);
