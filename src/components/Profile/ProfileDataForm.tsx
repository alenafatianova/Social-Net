import React from 'react'
import style from '../../styles/ProfileInfo.module.css'
import { createField, Input } from '../common/FormControl/FormControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { UserProfileType } from '../../types/types'


type propsType = {
    profile: UserProfileType
}
type LoginFormValuesTypeKeys = Extract<keyof UserProfileType, string>

const ProfileDataForm: React.FC<InjectedFormProps<UserProfileType, propsType> & propsType> = ({handleSubmit, error, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
            {error && <div>{error}</div>}
        <div className={style.fullNameBlock}>
            <b>Full name:</b> {createField<LoginFormValuesTypeKeys>('Full name', 'fullName', Input, [] )}
        </div>
        <div className={style.aboutMeBlock}>
            <b>About me: </b>{createField<LoginFormValuesTypeKeys>('About me', 'aboutMe', Input, [] )}
        </div>
        <div className={style.lookingForAJobBlock}>
                <b>Looking for a job:</b> 
                    {createField<LoginFormValuesTypeKeys>(undefined, 'lookingForAJob', Input, [], {type: 'checkbox'})}
        </div>
        <div>
            <b>Professionals skills: </b>
                {createField<LoginFormValuesTypeKeys>('Professional skills', 'lookingForAJobDescription', Input, [] )}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={style.contactBlockForm} key={key}>
                    <b>{key}: </b>{createField(key, 'contacts.' + key, Input, [] )}
                </div>
            })}
        </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<UserProfileType, propsType>({form: 'edit-profile'})(ProfileDataForm)
