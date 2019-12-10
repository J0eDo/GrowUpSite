import React, { Component } from 'react';
import "./registrationForm.css";
/*Libarys */
import {connect} from 'react-redux'
import {LOGIN,REGISTRATION,TEST} from '../../resource/serverActions'
import axios from 'axios'


class RegistrationForm extends Component {

  state = {
    mode : "login",
  }

  registration =()=>{
    let login = document.querySelector("#login").value
    let password = document.querySelector('#password').value 
    let name = document.querySelector('#name').value 
    axios.get(REGISTRATION(),{params:{
      login:login,
      password:password,
      name:name
    }}).then((res) => {
      console.log(res);
    })
  }

  login =()=>{
    let login = document.querySelector("#login").value
    let password = document.querySelector('#password').value
    axios.get(LOGIN(),{params:{
      login:login,
      password:password,
    }})
    .then(res => {
      console.log(res);
      if(res.data){
     
        this.props.loginUser(res.data)}
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
          <input   id="name" type="text" placeholder="nickname"/>
          <button onClick={this.registration}>Войти</button>  
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

  getSecret(){
   if(this.props.user){
    axios.get(
      TEST(this.props.user.user.login),
      {}
    ).then((res) => {
      console.log(res);
    })
   }
  }

  render (){
    return(
    <div>
      <div className="initialForm">
          <div className="initialForm_type">
            <div onClick={()=>this.setState({mode:false})}>Регистрация</div>
            <div onClick={()=>this.setState({mode:true})}>Войти</div>
          </div>
          <div className="initialForm_input">
            {this.state.mode?
            this.loginMode():
            this.regMode()}
          </div>
          <button onClick={this.getSecret.bind(this)}>GET SECRET</button>
      </div>
    </div>
  )}
}

export default connect(
  state=>({user:state.login}),
  disputch=>({  loginUser :(user)=>
    disputch({type:"login", user:user})})
)(RegistrationForm);