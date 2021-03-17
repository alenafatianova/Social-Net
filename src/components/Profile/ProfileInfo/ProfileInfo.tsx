import React, { ChangeEvent } from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import {contactsType, UserProfileType} from '../../../redux/profile-reducer'
import { ProfileStatusWithHooks } from '../ProfileStatus/ProfileStatusWithHooks'
import style from '../../../styles/ProfileInfo.module.css'
import userAvatar from '../../../assets/images/userAvatar.jpg'

type ContactsType = {
    contactTitle: string, 
    contactValue: string
}
export type profileType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}
type profileDataProps = {
    profile: UserProfileType
    isOwner: boolean
}
export const ProfileInfo: React.FC<profileType> = React.memo(({profile, status, updateStatus, isOwner, savePhoto}) => {
    
    if(!profile) {
        return <Preloader/>
    }
    const sendFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (  
        <div>
            <img className={style.profilePhoto} src={profile.photos.small || userAvatar} alt="profile"/>
            <div className={style.sendFileButton}>
                {isOwner && <input type="file" onChange={sendFileHandler} />}
            </div>
            
             <div className={style.statusContainer }> 
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <ProfileData 
                profile={profile} 
                isOwner={isOwner} />
        </div>
    )
})

const ProfileData: React.FC<profileDataProps> = ({profile}) => {
    return (
        <>
        <div className={style.fullNameBlock}>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div className={style.aboutMeBlock}>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div className={style.lookingForAJobBlock}>
                <b>Looking for a job:</b> {profile.lookingForAJob ? `I'm opened for offers` : "Currently working"} 
                <div>{profile.lookingForAJob && profile.lookingForAJobDescription}</div>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]} />
            })}
        </div>
    </>
    )
}

const Contacts: React.FC<ContactsType> = ({contactTitle, contactValue}) => {
    return <div className={style.contactsBlock}><b>{contactTitle}</b>: {contactValue}</div>
}