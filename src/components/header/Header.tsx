import React from "react";
import {MemoryRouter, NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import {headerContainerPropsType} from "./HeaderContainer";


const Header = (props:headerContainerPropsType) => {
    const {login,isAuth} = props
    return (
        <header className={classes.header}>
            <div className={classes.navBurger}>
                <div className={classes.burger}>
                    <input id="burger" type="checkbox" />
                    <label htmlFor="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <h4 className={classes.logo}>Valtika Social</h4>
            </div>
            <div className={classes.header_loginBlock}>
                {isAuth ? login :  <MemoryRouter> <NavLink to={'/login'}>Login</NavLink></MemoryRouter>}
                <a href={'https://social-network.samuraijs.com/signUp'} target={'_blank'}>Register</a>
            </div>
        </header>
    )

};
export default Header;