import React, {FC} from "react";
import classes from "./Header.module.css"
import {MemoryRouter, NavLink} from 'react-router-dom'
import {HeaderContainerPropsType} from "./HeaderContainer";


const Header: FC<HeaderContainerPropsType> = props => {
    const {
        login,
        isAuth,
    } = props
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/40/a9/fd/40a9fd835e04c97b9329a48cec0a236e.png" alt="animated-boy"/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? login
                    : <MemoryRouter>
                        <NavLink to='/login'>Login</NavLink>
                    </MemoryRouter>
                }
            </div>
        </header>
    )
};
export default Header;