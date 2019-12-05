import React, { Component } from 'react';
import "./registrationForm.css";
/*Libarys */
import {connect} from 'react-redux'
import {LOGIN} from '../../resource/serverActions'
import axios from 'axios'


class RegistrationForm extends Component {
  
  constructor(props){
    super(props)
  }

  state = {
    modeLogin : "login",
  }

  login =()=>{
    let login = document.querySelector("#login").value
    let password = document.querySelector('#password').value
    axios.post(LOGIN(),{
      loginUser:login,
      passwordUser:password
    })
      .then(res => {
      this.props.loginUser(res.data)
      console.log(res ,"RES");
      
      })
  }

  regMode=()=>{
    return(
      <div className="initialForm_sub">
        <h3>Логин</h3>
            <input id="login"  type="text" placeholder="login"/>
            <div>
            <h3>Пароль</h3>
            <input id="password"  type="password" placeholder="password"/>
          </div>
          <h3>Имя</h3>
          <input type="text" placeholder="nickname"/>
          <h3>Пол</h3>
          <div>
            <p><input type="checkbox" ngchecked="selected=='male'" ng-ruevalue="'male'" ngmodel="selected"></input>мужской</p>
            <p><input type="checkbox" ngchecked="selected=='female'" ngtruevalue="'female'" ngmodel="selected"></input>женский</p>
            <p><input type="checkbox" ngchecked="selected=='other'" ngtruevalue="'other'" ngmodel="selected"></input>неважно</p>
          </div>
          <button onClick={this.login}>Войти</button>  
      </div>
    )
  }

  loginMode=()=>{
    return(
      <div className="initialForm_sub">
        <div>
          <h3>Логин</h3>
            <input id="login"  type="text" placeholder="login"/>
            </div>
            <div>
              <h3>Пароль</h3>
              <input id="password"  type="password" placeholder="password"/>
            </div>
        <button onClick={this.login}>Войти</button>
      </div>)
  }

  render (){
    return(
    <div>
      <div className="initialForm">
          <div className="initialForm_type">
            <div onClick={()=>this.setState({modeLogin:false})}>Регистрация</div>
            <div onClick={()=>this.setState({modeLogin:true})}>Войти</div>
          </div>
          <div className="initialForm_input">
            {this.state.modeLogin?
            this.loginMode():
            this.regMode()
            }
          </div>
      </div>
    </div>
  )}
}

export default connect(
  state=>({}),
  disputch=>({  loginUser :(user)=>
    disputch({type:"login", user:user})})
)(RegistrationForm);