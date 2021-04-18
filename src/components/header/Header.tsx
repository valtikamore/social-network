import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import {headerContainerPropsType} from "./HeaderContainer";


const Header = (props:headerContainerPropsType) => {
    const {login,isAuth} = props
    return (
        <header className={classes.header}>
            <img className={classes.header_image}
                 src="https://i.pinimg.com/originals/40/a9/fd/40a9fd835e04c97b9329a48cec0a236e.png" alt=""/>
            <div className={classes.header_loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
};
export default Header;