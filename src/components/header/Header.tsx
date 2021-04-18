import React from "react";
import classes from "./Header.module.scss"

const Header = ()=> {
    return (
        <header className={classes.header}>
            <img className={classes.header_image} src="https://i.pinimg.com/originals/40/a9/fd/40a9fd835e04c97b9329a48cec0a236e.png" alt=""/>
            <div className={classes.header_loginBlock}></div>
        </header>
    )
};
export default Header;