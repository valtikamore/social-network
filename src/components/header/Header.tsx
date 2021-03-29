import React, {FC} from "react";
import classes from "./Header.module.css"
import {NavLink} from 'react-router-dom'

type HeaderPropsType = {

}
const Header:FC<HeaderPropsType> = ({})=> {
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/40/a9/fd/40a9fd835e04c97b9329a48cec0a236e.png" alt=""/>
            <div className={classes.loginBlock}>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </header>
    )
};
export default Header;