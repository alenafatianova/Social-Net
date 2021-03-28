import React from 'react'
import style from '../../styles/ProfileInfo.module.css'
import { createField, getStringKeys, Input } from '../common/FormControl/FormControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { UserProfileType } from '../../types/types'


type PropsType = {
    profile: UserProfileType
}
type ProfileDataFormKeys = getStringKeys<UserProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, PropsType> & PropsType> = ({handleSubmit, error, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {
            error && <div>{error}</div>
        }
        <div className={style.fullNameBlock}>
            <b>Full name:</b> {createField<ProfileDataFormKeys>('Full name', 'fullName', Input, [] )}
        </div>
        <div className={style.aboutMeBlock}>
            <b>About me: </b>{createField<ProfileDataFormKeys>('About me', 'aboutMe', Input, [] )}
        </div>
        <div className={style.lookingForAJobBlock}>
                <b>Looking for a job:</b> 
                    {createField<ProfileDataFormKeys>(undefined, 'lookingForAJob', Input, [], {type: 'checkbox'})}
        </div>
        <div>
            <b>Professionals skills: </b>
                {createField<ProfileDataFormKeys>('Professional skills', 'lookingForAJobDescription', Input, [] )}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={style.contactBlockForm} key={key}>
                    <b>{key}:{createField(key, 'contacts.' + key, Input, [] )}</b>
                </div>
            })}
        </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<UserProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
