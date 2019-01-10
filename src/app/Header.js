// @flow

import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import {connect} from "react-redux";
import {userLogOut} from "./state/actions/actions";
import {withRouter} from "react-router";


type Props = {
    isLoggedIn: boolean,
    onLogoutButtonClick: () => void,
    onLoginRedirect: (any) => void,
    match: any,
    location: any,
    history: any
};


const Header = ({isLoggedIn, onLogoutButtonClick, onLoginRedirect}: Props) => {
    return (
        <nav>
            <Link to="/">На главную</Link>&nbsp;
            <Link to="/news">Новости</Link>&nbsp;
            <Link to="/profile">Профиль</Link>&nbsp;
            {
                    <Button variant="raised" color="primary" onClick={isLoggedIn ? onLogoutButtonClick : onLoginRedirect}>
                        { isLoggedIn ? "Выйти" : "Войти" }
                    </Button>
            }
        </nav>
    );
};

const mapStateToProps = (state) => { return { isLoggedIn: state.isLoggedIn }};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogoutButtonClick: () => {
            dispatch(userLogOut());
        },
        onLoginRedirect: () => {
            ownProps.history.push("/login");
        }
    }
};

export default
withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
)((Header)));