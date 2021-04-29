import React, {FC} from 'react'
import { WrappedFieldProps } from 'redux-form'
import classes from './FormsControl.module.css'
import classNames from "classnames";

interface CustomFieldProps {
    type?: string;
}


export const Textarea:FC<WrappedFieldProps & CustomFieldProps > = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error
    const inputError = classNames(classes.fromControl, {
        [classes.error]: hasError
    })
    return (
        <>
            <textarea{...input} {...props}
                     className={inputError}/>
            {hasError && <span>invalid field</span>}
        </>

    )
}
export const Input:FC<WrappedFieldProps & CustomFieldProps > = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error
    const textError = classNames('',{
        [classes.invalidText]:hasError
    })
    return (
        <>
            <input{...input} {...props}
                     className={classNames(classes.fromControl, {
                         [classes.error]: hasError
                     })}/>
            {hasError && <span className={textError}>invalid field</span>}
        </>

    )
}