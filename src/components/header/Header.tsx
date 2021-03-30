import React, {FC} from "react";
import classes from "./Header.module.css"
import {NavLink} from 'react-router-dom'
import {HeaderContainerPropsType} from "./HeaderContainer";
import {log} from "util";


const Header: FC<HeaderContainerPropsType> = ({login, isAuth, setUserData}) => {
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/40/a9/fd/40a9fd835e04c97b9329a48cec0a236e.png" alt=""/>
            <div className={classes.loginBlock}>
                {isAuth ? login : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
};
export default Header;