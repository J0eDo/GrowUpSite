import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function loginMode({ submit, loginError }) {
  return (
    <div className="initialForm_sub">
      <div className="form">
        <TextField
          style={{
            margin:" 1rem auto"
          }}
          className="initialForm_input"
          id="login"
          label="login" 
          variant="outlined"/>
        <TextField
          className="initialForm_input"
          id="password"
          label="password"
          type="password" 
          variant="outlined"/>
      </div>
      <div className="initialForm_error">
        {loginError ? <p>неверные логин или пароль</p> : null}
      </div>
      <Button
        className="initialForm_button"
        onClick={submit}
        variant="contained" color="primary">
        Войти
      </Button>
    </div>
  )
}