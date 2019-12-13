import React from 'react';

export default function registrationMode({submit}){
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
          <button onClick={submit}>Зарегестрировать</button>  
      </div>
    )
  }