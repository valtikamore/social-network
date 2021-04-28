import React from 'react'
import {LoginReduxForm} from "../../components/loginForm/LoginForm";
import classes from './loginPage.module.css'

export const LoginPage = () => {

    return (
        <div className={classes.loginPage}>
            {/*<h1>Login</h1>*/}
            <div className={classes.loginForm}>
                <LoginReduxForm />
            </div>
        </div>

    )
}