import React, { Component } from "react";
import { connect } from "react-redux";



class RegistrationMode extends Component {

  errorConstruct(id, field, valid) {
    const fieldName = {
      login: "логин",
      password: "пароль",
      name: "имя"
    }
    const errorMessageConstruct = (name, validMessage) => `${name} ${validMessage}`
    let errorMessage = ''

    if (id === field) {
      switch (valid) {
        case 'required':
          errorMessage = errorMessageConstruct(fieldName[id], ": поле не может быть пустым")
          break;
        case 'min':
          errorMessage = errorMessageConstruct(fieldName[id], ": слишком короткий")
          break;
        case 'max':
          errorMessage = errorMessageConstruct(fieldName[id], ": слишком длинный")
          break;
        case 'notunique':
          errorMessage = errorMessageConstruct(fieldName[id], " должен быть уникальным")
          break;
        default:
          errorMessage = errorMessageConstruct(fieldName[id], ": неизвестная ошибка")
          break;
      }
      return (
        <div><p>{errorMessage}</p></div>
      )
    } else {
      return (<div><p></p></div>)
    }
  }

  render() {
    return (
      <div className="initialForm_sub">
        <div id="login" >
          <h3>Логин</h3>
          <input type="text" placeholder="login" />
          {this.errorConstruct("login", this.props.field, this.props.valid)}
        </div>
        <div id="password">
          <h3>Пароль</h3>
          <input type="password" placeholder="password" />
          {this.errorConstruct("password", this.props.field, this.props.valid)}
        </div>
        <div id="name">
          <h3>Имя</h3>
          <input type="text" placeholder="nickname" />
          {this.errorConstruct("name", this.props.field, this.props.valid)}
        </div>
        <button onClick={this.props.submit}>Зарегестрировать</button>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    field: state.user.errorReg && state.user.errorReg.field,
    valid: state.user.errorReg && state.user.errorReg.validation
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({

  })
)(RegistrationMode)