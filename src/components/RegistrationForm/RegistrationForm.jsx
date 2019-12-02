import React, { useState } from 'react';
import "./registrationForm.css";
import {SERVER_IP,LOGIN,REGGISTRATION} from '../../serverActions'
import axios from 'axios'


export default function RegistrationForm() {
  
  const [ mode, setMode] = useState("registration");

  const registrationMode=()=>{
   setMode("registration")
  }

  const loginMode=()=>{
    setMode("login")
  }

  const userEnterMode=()=>{

  }

  const login =()=>{
    let login = document.querySelector("#login").value
    let password = document.querySelector('#password').value
    console.log(login,password)
    axios.get(LOGIN(":VAxSIA","password"))
      .then(res => {
        console.log(res.data)
      })
  }

  const registrationModeInput=(type)=>{
    if(type === "registration"){
      return(
        <div className="initialForm_sub">
            <h3>Имя</h3>
            <input type="text" placeholder="nickname"/>
            <h3>Пол</h3>
            <div>
              <p><input type="checkbox" ngchecked="selected=='male'" ng-ruevalue="'male'" ngmodel="selected"></input>мужской</p>
              <p><input type="checkbox" ngchecked="selected=='female'" ngtruevalue="'female'" ngmodel="selected"></input>женский</p>
              <p><input type="checkbox" ngchecked="selected=='other'" ngtruevalue="'other'" ngmodel="selected"></input>неважно</p>
            </div>
            <button onClick={login}>Войти</button>  
        </div>
      )
    }
    else if(type === "login"){
      return(<div className="initialForm_sub">
        <button onClick={login}>Войти</button>
      </div>)
    }else{
      
    }
  }

  return (
    <div>
      <div className="initialForm">
          <div className="initialForm_type">
            <div onClick={registrationMode}>Регистрация</div>
            <div onClick={loginMode}>Войти</div>
          </div>
          <div className="initialForm_input">
            <div>
              <h3>Логин</h3>
              <input id="login"  type="text" placeholder="login"/>
            </div>
            <div>
              <h3>Пароль</h3>
              <input id="password"  type="password" placeholder="password"/>
            </div>
            {registrationModeInput(mode)}
          </div>
      </div>
    </div>
  );
}