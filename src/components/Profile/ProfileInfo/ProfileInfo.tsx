import React from 'react'
import { Preloader } from '../../common/Preloader'
import {profileType} from '../../../redux/profile-reducer'
import {ProfileStatus} from '../ProfileStatus/ProfileStatus'



export const ProfileInfo = React.memo((props: profileType) => {
    
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
             <div>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5W2tli7-nT4GT1zqSkZziPAeOoHuZUwljrQ&usqp=CAU' 
                alt="user-avatar"/>
                <div><img src={props.profile.photos.small} alt="some-user-avatar"/></div>
                <ProfileStatus status={''} updateStatus={props.updateStatus}/>
            </div>
            <div>
                
            </div>
        </div>
    )
})
