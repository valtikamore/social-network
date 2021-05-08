import React, {FC} from "react";
import classes from "./Header.module.css"
import {MemoryRouter, NavLink} from 'react-router-dom'
import {HeaderContainerPropsType} from "./HeaderContainer";



const Header: FC<HeaderContainerPropsType> = props => {
    const {
        login,
        isAuth,
        logout
    } = props
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/40/a9/fd/40a9fd835e04c97b9329a48cec0a236e.png" alt="animated-boy"/>
            <>
                {isAuth
                    ? <div className={classes.loginBlock}>
                        {login}
                        <button onClick={logout}>logout</button>
                    </div>
                    :
                            <NavLink to='/login'>Login</NavLink>
                }
            </>
        </header>
    )
};
export default Header;