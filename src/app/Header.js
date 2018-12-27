import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import {connect} from "react-redux";
import {userLogOut} from "./state/actions/actions";


function Header({isLoggedIn, onLogoutButtonClick}) {
    return (
        <nav>
            <Link to="/home">На главную</Link>
            <Link to="/news">Новости</Link>
            <Link to="/profile">Профиль</Link>

            {
                isLoggedIn && (
                    <Button variant="raised" color="primary" onClick={onLogoutButtonClick}>
                        Выйти
                    </Button>
                )
            }
        </nav>
    );
}


const mapStateToProps = (state) => { return { isLoggedIn: state.isLoggedIn }};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutButtonClick: () => {
            dispatch(userLogOut());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);