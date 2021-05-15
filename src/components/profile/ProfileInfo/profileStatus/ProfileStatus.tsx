import React, {FC, useState} from 'react'

interface ProfileStatusPropsType {
    status:string
}
export const ProfileStatus:FC<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false);

    const onClickHandler = () => {
        setEditMode(true)
    }
    const onBlurHandler = () => {
        setEditMode(false)
    }

    return (
        <div>
            {editMode
                ? <input type="text" value={props.status} onBlur={onBlurHandler} autoFocus/>
                :  <span onDoubleClick={onClickHandler}>{props.status}</span>}
        </div>
    )
}