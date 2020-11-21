import React from 'react'
import { Preloader } from '../common/Preloader'
import {UserProfileType} from '../Profile/ProfileContainer'

type profileType = {
    profile: UserProfileType
}

export default function ProfileInfo (props: profileType) {
    
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
             <div>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5W2tli7-nT4GT1zqSkZziPAeOoHuZUwljrQ&usqp=CAU' 
                alt="user-avatar"/>
                <img src={props.profile.photos.small} alt="photo"/>
            </div>
        </div>
    )
}
