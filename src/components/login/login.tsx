import React from 'react'
import classes from './loginForm.module.scss'




export const LoginForm = () => {
    return (
            <form className={classes.loginPage__form}>
                <input type="text" placeholder={'login'}/>
                <input type="password" placeholder={'password'}/>
                <label >
                    remember me
                    <input type="checkbox"/>
                </label>
                <button>Login</button>
            </form>
    )
}

export const Login = () => {
    return (
        <div className={classes.loginPage}>
            <h2 className={classes.title}>login</h2>
            <LoginForm/>
        </div>
    )
}