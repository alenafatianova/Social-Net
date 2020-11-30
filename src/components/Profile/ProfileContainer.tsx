import React, {useEffect} from 'react' 
import axios from 'axios'
import {connect} from 'react-redux'
import {StateType} from '../../redux/reduxStore'
import {setUserProfile} from '../../redux/ProfileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile'
import {UserProfileType} from '../../redux/ProfileReducer'

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


export const ProfileContainer = React.memo((props: ProfileContainerProps) => {
    
    useEffect(() => {
        let userId = props.match.params.userId
        return () => {
            if(!userId) {
                userId = '2'
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then
            (response => {props.setUserProfile(response.data)})
        }
    }, [])

   return (
          <Profile {...props} profile={props.profile}/>
        )
})
          

let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile 
    }
}
export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))