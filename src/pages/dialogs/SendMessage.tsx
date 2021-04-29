import React, {FC} from 'react'
import {Field, InjectedFormProps} from "redux-form";
import {sendMessageExtendsFormDataType, sendMessageFormDataType} from "./Dialogs";
import {Textarea} from "../../components/common/formsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validate/validators";

const maxLengthCreator100 =maxLengthCreator(100)
export const SendMessage: FC<InjectedFormProps<sendMessageFormDataType> & sendMessageExtendsFormDataType>= (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={'create post'}
                component={Textarea}
                name={'sendNewMessage'}
                validate={[required,maxLengthCreator100]}
            > </Field>
            <button >send</button>
        </form>
    )
}
