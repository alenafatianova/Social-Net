import React from 'react'
import { UserProfileType } from '../../redux/profile-reducer'
import style from '../../styles/ProfileInfo.module.css'
import { createField, Input } from '../common/FormControl/FormControls'
import { InjectedFormProps, reduxForm } from 'redux-form'

type profileDataFormType = {
    profile: UserProfileType
    isOwner: boolean
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    professionalsSkills: string
}

type LoginFormValuesTypeKeys = Extract<keyof profileDataFormType, string>

const ProfileDataForm: React.FC<InjectedFormProps<profileDataFormType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                {createField<LoginFormValuesTypeKeys>('Professionals skills', 'professionalsSkills', Input, [] )}
        </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<profileDataFormType>({form: 'editProfile'})(ProfileDataForm)
