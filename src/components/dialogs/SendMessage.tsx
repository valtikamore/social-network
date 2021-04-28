import React, {FC} from 'react'
import {Field, InjectedFormProps} from "redux-form";
import {sendMessageExtendsFormDataType, sendMessageFormDataType} from "./Dialogs";

export const SendMessage: FC<InjectedFormProps<sendMessageFormDataType> & sendMessageExtendsFormDataType>= (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={'create post'}
                component={'textarea'}
                name={'sendNewMessage'}
            > </Field>
            <button >send</button>
        </form>
    )
}
