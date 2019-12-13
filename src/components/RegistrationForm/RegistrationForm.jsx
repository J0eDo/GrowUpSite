import React, { Component } from 'react';
import "./registrationForm.css";
/*Libarys */
import { connect } from 'react-redux'
/*Components*/
import Login from './LoginMode'
import Registration from './RegistrationMode'
/*Actions */
import { autorizated, registrated } from '../../API/api'



class RegistrationForm extends Component {

  state = {
    mode: "login"
  }

  registration() {
    let login = document.querySelector('#login>input').value
    let password = document.querySelector('#password>input').value
    let name = document.querySelector('#name>input').value
    this.props.registration(login, password, name)
  }

  login() {
    let login = document.querySelector('#login>input').value
    let password = document.querySelector('#password>input').value
    this.props.autorization(login, password)

  }


  render() {
    return (
      <div>
        <div className="initialForm">
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
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({
    autorization: (login, password) => dispatch(autorizated({ login, password })),
    registration: (login, password, name) => dispatch(registrated({ login, password, name }))
  })
)(RegistrationForm);