import React, { ComponentType } from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {getProfile, UserProfileType, getStatus, updateStatus} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
//import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'


export type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
    status: string
    updateStatus:  (status: string) => void
}
export type OwnPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
}

export type PathProps = {
    userId: number 
}

export type ProfileContainerProps = RouteComponentProps<PathProps> & OwnPropsType & mapStateToPropsType

export class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {

        return (
            <Profile {...this.props} 
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    />
        )
    }   
}    


let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<ComponentType>(connect(mapStateToProps, {getProfile, getStatus, updateStatus }), 
    withRouter
    // withAuthRedirect
)(ProfileContainer)