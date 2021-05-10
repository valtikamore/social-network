import React, {FC} from 'react'
import { WrappedFieldProps} from 'redux-form'
import classes from './FormsControl.module.css'
import classNames from "classnames";

interface CustomFieldProps {
    type?: string;
}


export const FormControl:FC<WrappedFieldProps & CustomFieldProps > = ({input,meta,...props}) => {
    return (
        <>
            {props.children}
        </>
    )
}
export const Textarea:FC<WrappedFieldProps & CustomFieldProps> = props => {
    const {children,input,meta,...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps} className={classNames(classes.fromControl)}/> </FormControl>
}

export const Input:FC<WrappedFieldProps & CustomFieldProps> = props => {
    const {children,input,meta,...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} className={classNames(classes.fromControl)}/></FormControl>
}

