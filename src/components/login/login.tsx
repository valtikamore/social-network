import React, { FC } from 'react'
import classes from './loginForm.module.scss'
import  {Field, InjectedFormProps,reduxForm} from "redux-form";

interface formDataType {
    email:string
    password:string
    rememberMe:boolean
}
export const Login = () => {
    const onSubmit=(formData:formDataType) => {
        console.log(formData)
    }
    return (
        <div className={classes.loginPage}>
            <h2 className={classes.title}>login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginForm:FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form className={classes.loginPage__form} onSubmit={props.handleSubmit}>
            <Field type="text" placeholder={'login'} name={'login'} component={'input'}/>
            <Field type="password" placeholder={'password'} name={'password'} component={'input'}/>
            <label >
                remember me
                <Field type="checkbox" component={'input'} name={'rememberMe'}/>
            </label>
            <button>Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<formDataType>({
    form:'login'
})(LoginForm)
