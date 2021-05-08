import React, {FC} from 'react'
import classes from './loginPage.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { required } from "../../utils/validate/validators";
import  {reduxForm,Field, InjectedFormProps } from 'redux-form';
import { Input } from '../../components/common/formsControl/FormsControl';

interface mapDspatchToProps  {
    login:(email:string,password:string,rememberMe:boolean,captcha:boolean) => void
}
interface formDataType {
    email:string
    password:string
    rememberMe:boolean
}
 const LoginForm:FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  placeholder={'email'} component={Input} name={'email'} validate={[required]}/>
            <Field  placeholder={'password'} component={Input} name={'password'} validate={[required]}/>
            <div style={{display:"flex",alignItems:"center"}}>
                <Field type="checkbox" component={'input'} name={'rememberMe'} />
                <label htmlFor="{'rememberMe'}">remember me</label>
            </div>
            <button>Login</button>
        </form>
    )
}

  const Login:FC<mapDspatchToProps> = (props) => {
    const onSubmit= (formData:formDataType) => {
        props.login(formData.email,formData.password,formData.rememberMe,false)
     }

    return (
        <div className={classes.loginPage}>
            <h1>Login</h1>
            <div className={classes.loginForm}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
 const LoginReduxForm = reduxForm<formDataType>({
    form:'login'
})(LoginForm)


export default connect(null ,{login})(Login)