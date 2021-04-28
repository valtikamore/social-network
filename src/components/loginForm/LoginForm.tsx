import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";

interface formDataType {
    email:string
    password:string
    rememberMe:boolean
}
export const LoginForm:FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  placeholder={'Login'} component={'input'} name={'login'}/>
            <Field  placeholder={'password'} component={'input'} name={'password'}/>
            <div style={{display:"flex",alignItems:"center"}}>
                <Field type="checkbox" component={'input'} name={'rememberMe'} />
                <label htmlFor="{'rememberMe'}">remember me</label>
            </div>

            <button>Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm<formDataType>({
    form:'login'
})(LoginForm)

