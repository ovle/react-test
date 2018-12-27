import React, {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import {CORRECT_LOGIN, CORRECT_PASSWORD, ErrorMessages, USER_AUTHORIZED_KEY} from "../../utils/constants";
import ls from "local-storage";


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            isValidCredentials: true
        };
    }


    onLoginButtonClick = () => {
        //todo api request...
        const isValidCredentials = this.state.login == CORRECT_LOGIN && this.state.password == CORRECT_PASSWORD;
        this.setState({ isValidCredentials: isValidCredentials });

        if (isValidCredentials) {
            ls.set(USER_AUTHORIZED_KEY, true);
            //todo use redux
        }
    };

    onLoginChange = (event) => {
        this.setState({ login: event.target.value, isValidCredentials: true });
    };

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value, isValidCredentials: true });
    };

    loginButtonEnabled = () => {
        return this.state.login.length > 0 && this.state.password.length > 0;
    };

    render = () =>
        <div>
            <h2 className="form-signin-heading">Форма авторизации</h2>
            <TextField className="form-control" type="text" placeholder="Логин" value={this.state.login} onChange={this.onLoginChange}/>
            <TextField className="form-control" type="password" placeholder="Пароль" value={this.state.password} onChange={this.onPasswordChange}/>
            { !this.state.isValidCredentials && <div>{ErrorMessages.LOGIN_FAILED}</div> }

            <Button variant="raised" color="primary" onClick={this.onLoginButtonClick} disabled={ !this.loginButtonEnabled() }>
                Войти
            </Button>
        </div>
}

export default LoginPage;