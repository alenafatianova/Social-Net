import React, { ChangeEvent } from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import {contactsType, profileType} from '../../../redux/profile-reducer'
import { ProfileStatusWithHooks } from '../ProfileStatus/ProfileStatusWithHooks'
import style from '../../../styles/ProfileInfo.module.css'
import userAvatar from '../../../assets/images/userAvatar.jpg'

type ContactsType = {
    contactTitle: string, 
    contactValue: string
}

export const ProfileInfo = React.memo((props: profileType) => {
    
    if(!props.profile) {
        return <Preloader/>
    }
    const sendFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (  
        <div>
            <img className={style.profilePhoto} src={props.profile.photos.small || userAvatar} alt="profile"/>
            <div className={style.sendFileButton}>
                {props.isOwner && <input type="file" onChange={sendFileHandler} />}
            </div>
            <div className={style.fullNameBlock}>
                <b>Full name:</b> {props.profile.fullName}
            </div>
             <div className={style.statusContainer }> 
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={style.lookingForAJobBlock}>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? `I'm opened for offers` : "Currently working"} 
                <div>{props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</div>
            </div>
            <div className={style.aboutMeBlock}>
                <b>About me: </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key as keyof contactsType]} />
                })}
            </div>
        </div>
    )
})

const Contacts: React.FC<ContactsType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}