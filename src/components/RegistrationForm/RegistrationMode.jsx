import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class RegistrationMode extends Component {

  errorConstruct(id, field, valid) {
    const fieldName = {
      login: ["логин", "логином"],
      password: ["пароль", "паролем"],
      name: ["имя", "именем"]
    }

    const errorMessageConstruct = (name, validMessage) => `${name} ${validMessage}`
    let errorMessage = ''

    if (id === field) {
      switch (valid) {
        case 'required':
          errorMessage = errorMessageConstruct(fieldName[id][0], ": поле не может быть пустым")
          break;
        case 'min':
          errorMessage = errorMessageConstruct(fieldName[id][0], ": слишком короткий")
          break;
        case 'max':
          errorMessage = errorMessageConstruct(fieldName[id][0], ": слишком длинный")
          break;
        case 'unique':
          errorMessage = errorMessageConstruct(`Пользователь с таким ${fieldName[id][1]}`, "уже существует")
          break;
        default:
          errorMessage = errorMessageConstruct(fieldName[id[0]], ": неизвестная ошибка")
          break;
      }
      return (
        <p>{errorMessage}</p>
      )
    } else {
      return (<div><p></p></div>)
    }
  }

  render() {
    return (
      <div className="initialForm_sub">
        <div className="form">
          <TextField
            className="initialForm_input"
            id="login"
            label="login"
            variant="outlined" />
          <div className="initialForm_error">
            {this.errorConstruct("login", this.props.field, this.props.valid)}
          </div>
          <TextField
            className="initialForm_input"
            id="password"
            label="password"
            type="password"
            variant="outlined" />
          <div className="initialForm_error">
            {this.errorConstruct("password", this.props.field, this.props.valid)}
          </div>
          <TextField
            className="initialForm_input"
            id="name"
            label="name"
            variant="outlined" />
          <div className="initialForm_error">
            {this.errorConstruct("name", this.props.field, this.props.valid)}
          </div>
        </div>
        <Button
          className="initialForm_button"
          onClick={this.props.submit}
          variant="contained" color="primary">
          Зарегестрироваться
      </Button>
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
)(RegistrationMode)