import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {getProfile, UserProfileType} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'


export type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
}
export type OwnPropsType = {
    getProfile: (userId: string) => void
}

export type PathProps = {
    userId: string 
}

export type ProfileContainerProps = RouteComponentProps<PathProps> & OwnPropsType & mapStateToPropsType

export class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }
    render() {

        return (
            <Profile {...this.props} 
                    profile={this.props.profile}
                    />
        )
    }   
}    


let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, {getProfile}), withRouter, withAuthRedirect)(ProfileContainer)