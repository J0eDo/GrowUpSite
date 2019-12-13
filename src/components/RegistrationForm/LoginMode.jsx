import React from 'react';

export default function loginMode({submit,loginError}){
  return(
    <div className="initialForm_sub">
      <div>
        <h3>Логин</h3>
          <input id="logins"  type="text" placeholder="login"/>
          </div>
          <div>
            <h3>Пароль</h3>
            <input id="passwords"  type="password" placeholder="password"/>
          </div>    
      <button onClick={submit}>Войти</button>
      {loginError?<p>неверные логин или пароль</p>:null}
  </div>)
}