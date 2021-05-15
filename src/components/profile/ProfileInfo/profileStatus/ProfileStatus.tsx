import React, {FC, useEffect, useState} from 'react'

interface ProfileStatusPropsType {
    status:string
    updateUserStatus: (status:string) => void
}
export const ProfileStatus:FC<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    const onClickHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = (e:any) => {
        setEditMode(false)
        props.updateUserStatus(e.currentTarget.value)
    }
    const onChangeStatus = (e:any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        setText(props.status)
    },[props.status])

    return (
        <div>
            {editMode
                ? <input type="text" value={text}  onBlur={onBlurHandler} autoFocus onChange={onChangeStatus}/>
                :  <span onDoubleClick={onClickHandler}>{props.status && props.status}</span>}
        </div>
    )
}