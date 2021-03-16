import React, { ChangeEvent } from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import {profileType} from '../../../redux/profile-reducer'
import { ProfileStatusWithHooks } from '../ProfileStatus/ProfileStatusWithHooks'
import style from '../../../styles/ProfileInfo.module.css'
import userAvatar from '../../../assets/images/userAvatar.jpg'

export const ProfileInfo = React.memo((props: profileType) => {
    
    if(!props.profile) {
        return <Preloader/>
    }
    const sendFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.setNewPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <img className={style.profilePhoto} src={props.profile.photos.small || userAvatar} alt="profile-photo"/>
            <div className={style.sendFileButton}>
                {props.isOwner && <input type="file" onChange={sendFileHandler} />}
            </div>
             <div className={style.statusContainer }>
             <div>    
            </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
            </div>
        </div>
    )
})
