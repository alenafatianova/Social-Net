import React, { ChangeEvent, useState } from 'react'
import style from './ProfileStatus.module.css'

export type statusProps = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: statusProps) => {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
  }
  const activateEditMode = () => setEditMode(true)
  const deactivateMode = () => {
    setEditMode(false)
    props.updateStatus(status)
}
  
   
        return (
        <div className={style.profileStatusWrapper}>
            {!editMode &&
             <div className={style.spanStyle}>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            }
           
            {editMode &&
            <div>
                <input 
                    className={style.statusInput}
                    onChange={changeStatus}
                    autoFocus={true}
                    onBlur={deactivateMode} 
                    value={status} 
                    placeholder="what are you thinking about?"/>
            </div>
            }
        </div>
    )
}
