import React from 'react';
import "./chat.scss";
import Redirect from 'react-router-dom'
//Libarys 
import { connect } from 'react-redux'




class Chat extends React.Component {

    render() {
        if (!this.props.isAuth) {
            return <Redirect to='/'/>
        }
        let Component = this.props.component
        return <Component/>
    }
}

export default connect(
    state => ({
        isAuth: true
    }),
    dispatch => ({
    })
)(Chat);
