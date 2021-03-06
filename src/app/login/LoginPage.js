// @flow

import React, {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import {CORRECT_LOGIN, CORRECT_PASSWORD, ErrorMessages} from "../../utils/constants";
import {userLogIn} from "../state/actions/actions";
import connect from "react-redux/es/connect/connect";


type Props = {
    onLoginButtonClick: () => void
};

type State = {
    login: string,
    password: string,
    hasCredentialsError: boolean
};


class LoginPage extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: "",
            hasCredentialsError: false
        };
    }

    _onLoginButtonClick = () => {
        //todo api request...
        const isValidCredentials = this.state.login === CORRECT_LOGIN && this.state.password === CORRECT_PASSWORD;
        this.setState({ hasCredentialsError: !isValidCredentials });

        if (isValidCredentials) {
            this.props.onLoginButtonClick();
        }
    };

    onLoginChange = (event) => {
        this.setState({ login: event.target.value, hasCredentialsError: false });
    };

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value, hasCredentialsError: false });
    };

    loginButtonEnabled = () => {
        return this.state.login.length > 0 && this.state.password.length > 0;
    };

    render() {
        return <div>
            <h2>Форма авторизации</h2>
            <TextField className="form-control" type="text" placeholder="Логин" value={this.state.login}
                       onChange={this.onLoginChange}/>
            <TextField className="form-control" type="password" placeholder="Пароль" value={this.state.password}
                       onChange={this.onPasswordChange}/>
            {this.state.hasCredentialsError && <div>{ErrorMessages.LOGIN_FAILED}</div>}

            <Button variant="raised" color="primary" onClick={this._onLoginButtonClick} disabled={!this.loginButtonEnabled()}>
                Войти
            </Button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginButtonClick: () => {
            dispatch(userLogIn());
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);