import React, { Component } from 'react';
import "./auth.scss";
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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
            <Tabs
              value={this.state.mode}
              onChange={(event, newValue) => {
                this.setState({ mode: newValue })
              }}
              indicatorColor="primary"
              variant = "fullWidth"
              centered
            >
              <Tab label="Регистрация"/>
              <Tab label="Вход"/>
            </Tabs>
          </div>
          <div className="initialForm_input">
            {this.state.mode ?
              <Login submit={this.login.bind(this)} loginError={this.props.auth} /> :
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
  state =>({
    user : state.user,
    auth : state.user.auth
  }),
  dispatch => ({
    autorization: (login, password) => dispatch(autorizated({ login, password })),
    registration: (login, password, name) => dispatch(registrated({ login, password, name }))
  })
)(RegistrationForm);