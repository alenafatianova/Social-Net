import React, {useEffect} from 'react' 
import axios from 'axios'
import {connect} from 'react-redux'
import {StateType} from '../../redux/reduxStore'
import {setUserProfile} from '../../redux/ProfileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile'


export type UserProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    photos: photosType
    contacts: contactsType
}
type photosType = {
    small: string
    large: string
}
type contactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type mapStateToPropsType = {
    profile: UserProfileType
}
export type OwnPropsType = {
    setUserProfile: (profile: UserProfileType) => void
    
}
export type PathProps = {
    userId: string 
}
export type ProfileContainerProps = RouteComponentProps<PathProps> & OwnPropsType & mapStateToPropsType

export function ProfileContainer(props: ProfileContainerProps) {
    
    useEffect(() => {
        let userId = props.match.params.userId
        return () => {
            if(!userId) {
                userId = ''
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then
            (response => {props.setUserProfile(response.data)})
        }
    }, [])

   return (
          <Profile profile={props.profile}/>
        )
}
          

let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataConatinerComponent = withRouter(ProfileContainer)
export default  connect(mapStateToProps, {setUserProfile})(WithUrlDataConatinerComponent)