import React, { Component } from 'react';
import "./registrationForm.scss";
//Libarys 
import { connect } from 'react-redux'
//Components
import Login from './LoginMode'
import Registration from './RegistrationMode'
//Actions 
import { autorizated, registrated } from '../../API/userProfile'
//MaterialUI
import Card from '@material-ui/core/Card';
import { styled } from '@material-ui/core/styles';

const Panel = styled(Card)({
  backgroundColor: "#395969",
});

class RegistrationForm extends Component {

  state = {
    mode: "login"
  }

  registration() {
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    let name = document.getElementById('name').value
    this.props.registration(login, password, name)
  }

  login() {
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    this.props.autorization(login, password)

  }


  render() {
    return (
      <div className="usp_conteiner">
        <Panel className="initialForm">
          <div className="initialForm_type">
            <div onClick={() => this.setState({ mode: false })}>Регистрация</div>
            <div onClick={() => this.setState({ mode: true })}>Войти</div>
          </div>
          <div className="initialForm_input">
            {this.state.mode ?
              <Login submit={this.login.bind(this)} loginError={this.props.user.loginError} /> :
              <div>
                <Registration submit={this.registration.bind(this)} />
              </div>
              }
          </div>
        </Panel>
      </div>
    )
  }
}


export default connect(
  state => ({
    user : state
}),
  dispatch => ({
    autorization: (login, password) => dispatch(autorizated({ login, password })),
    registration: (login, password, name) => dispatch(registrated({ login, password, name }))
  })
)(RegistrationForm);