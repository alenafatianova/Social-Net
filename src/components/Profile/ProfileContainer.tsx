import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {setUserProfile, UserProfileType, profileType} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
import { usersAPI } from '../../API/API'


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

class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        usersAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }   
}    

let mapStateToProps = (state: StateType): profileType => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = (withRouter(ProfileContainer))
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)