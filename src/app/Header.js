import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import ls from "local-storage";
import {USER_AUTHORIZED_KEY} from "../utils/constants";


function Header(props) {

    const onLogoutButtonClick = () => {
        //todo api request...

        ls.set(USER_AUTHORIZED_KEY, false);
        //todo use redux
    };

    const logoutButtonEnabled = () => ls.get(USER_AUTHORIZED_KEY) === true;

    return (
        <nav>
            <Link to="/home">На главную</Link>
            <Link to="/news">Новости</Link>
            <Link to="/profile">Профиль</Link>

            {
                logoutButtonEnabled() && (
                <Button variant="raised" color="primary" onClick={onLogoutButtonClick}>
                    Выйти
                </Button>
                )
            }
        </nav>
    );
}

export default Header;