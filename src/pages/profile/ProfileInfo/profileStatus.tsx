import React, {FC, useEffect, useState} from "react";

export type EditableSpanPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatus:FC<EditableSpanPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

      useEffect(() => {
          setStatus(props.status)
      },[props.status])

    const onDoubleClick = () => {
        setEditMode(true)
    }
   const onBlur = (e: any) => {
       setEditMode(false)
       props.updateStatus(e.currentTarget.value)
    }

   const onChange = (e: any) => {
       setStatus(e.currentTarget.value)

    }
    const onEnter = (e: any) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            props.updateStatus(e.currentTarget.value)
        }
    }
        return (
            <>
                {!editMode
                    ? <span
                        onDoubleClick={onDoubleClick}
                        onTouchStart={onDoubleClick}>{!props.status ? 'hey' : props.status}</span>
                    : <input
                        type="text"
                        onBlur={onBlur}
                        value={status}
                        autoFocus
                        onChange={onChange}
                        onKeyPress={onEnter}
                    />
                }
            </>

        )
}

export default ProfileStatus
