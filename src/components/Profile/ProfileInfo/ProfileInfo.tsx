import React from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import {profileType} from '../../../redux/profile-reducer'
import { ProfileStatusWithHooks } from '../ProfileStatus/ProfileStatusWithHooks'
import style from './ProfileInfo.module.css'
import myAvatar from '../../../assets/images/myAvatar.webp'

export const ProfileInfo = React.memo((props: profileType) => {
    
    if(!props.profile) {
        return <Preloader/>
    }
    
    return (
        <div>
            <img src={props.profile.photos.small} alt=""/>
             <div className={style.statusContainer }>
             <div>
                
            </div>
                {/* <div className={style.userAvatar}>
                    <img src={myAvatar} alt="some-user-avatar" className={style.myAvatarStyle} />
                </div> */}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
            </div>
        </div>
    )
})
