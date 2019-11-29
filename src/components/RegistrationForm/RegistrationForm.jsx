import React, { useState } from 'react';
import "./registrationForm.css"


export default function RegistrationForm() {
  
  const [ mode, setMode] = useState("registration");

  const registrationMode=()=>{
   setMode("registration")
  }

  const loginMode=()=>{
    setMode("login")
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
        </div>
      )
    }
    else{
      return(<div className="initialForm_sub"></div>)
    }
  }

  return (
    <div>
      <form className="initialForm"  action="initial">
          <div className="initialForm_type">
            <div onClick={registrationMode}>Регистрация</div>
            <div onClick={loginMode}>Войти</div>
          </div>
          <div className="initialForm_input">
            <div>
              <h3>Логин</h3>
              <input type="text" placeholder="login"/>
            </div>
            <div>
              <h3>Пароль</h3>
              <input type="password" placeholder="password"/>
            </div>
            {registrationModeInput(mode)}
            <button>Войти</button>
          </div>
      </form>
    </div>
  );
}