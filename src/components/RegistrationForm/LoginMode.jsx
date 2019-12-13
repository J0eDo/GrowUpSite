import React from 'react';

export default function loginMode({ submit, loginError }) {
  return (
    <div className="initialForm_sub">
      <div id="login" >
        <h3>Логин</h3>
        <input type="text" placeholder="login" />
      </div>
      <div id="password" >
        <h3>Пароль</h3>
        <input type="text" placeholder="login" />
      </div>
      <button onClick={submit}>Войти</button>
      {loginError ? <p>неверные логин или пароль</p> : null}
    </div>)
}