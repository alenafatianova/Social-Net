import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {setUserProfile, UserProfileType, profileType} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'



export type mapStateToPropsType = {
    profile: UserProfileType
}
export type OwnPropsType = {
    getProfile: (userId: string) => void
}

export type PathProps = {
    userId: string 
}

export type ProfileContainerProps = RouteComponentProps<PathProps> & OwnPropsType & mapStateToPropsType

class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
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
export default connect(mapStateToProps, {})(WithUrlDataContainerComponent)