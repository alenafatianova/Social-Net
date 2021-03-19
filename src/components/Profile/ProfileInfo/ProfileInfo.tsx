import React, { ChangeEvent, useState } from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import { ProfileStatusWithHooks } from '../ProfileStatus/ProfileStatusWithHooks'
import style from '../../../styles/ProfileInfo.module.css'
import userAvatar from '../../../assets/images/userAvatar.jpg'
import { ProfileDataReduxForm } from '../ProfileDataForm'
import { contactsType, UserProfileType } from '../../../types/types'

type ContactsType = {
    contactTitle: string, 
    contactValue: string
}
export type profileType = {
    profile: UserProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
    savePhoto: (file: File) => void
}
type profileDataProps = {
    profile: UserProfileType
    isOwner: boolean
    onEditMode: () => void
}

export const ProfileInfo: React.FC<profileType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    
    const [editMode, setEditMode] = useState<boolean>(false)
    
    if(!profile) {
        return <Preloader/>
    }

    const sendFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onDataFormSubmit = (formData: UserProfileType) => {
        saveProfile(formData).then(
            () => {
            setEditMode(false)
        })  
    }

    return (  
        <div className={style.profileInfoContainer}>
            <div className={style.profileInfo}>
                <img className={style.profilePhoto} src={profile.photos.large || userAvatar} alt="profile"/>
                <div className={style.statusContainer }> 
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            </div>
            <div className={style.sendFileButton}>
                {isOwner && <input type="file" onChange={sendFileHandler} />}
            </div>
            
            {
            editMode 
                ? <ProfileDataReduxForm initialValues={profile} onSubmit={() => onDataFormSubmit} profile={profile} /> 
                : <ProfileData profile={profile} isOwner={isOwner} onEditMode={() => setEditMode(true)}/>
            }
        </div>
    )
}

const ProfileData: React.FC<profileDataProps> = ({profile, isOwner, onEditMode}) => {
    return (
        <div className={style.profileDataBlock}>
        {
            isOwner && <div><button className={style.editProfileInfoBtn} onClick={onEditMode}>Edit</button></div>
        }
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
        <div className={style.contactsBlock}>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contacts  key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]} />
            })}
        </div>
    </div>
    )
}


export const Contacts: React.FC<ContactsType> = ({contactTitle, contactValue}) => {
    return <div className={style.contactsBlock}><b>{contactTitle}</b>: {contactValue}</div>
}