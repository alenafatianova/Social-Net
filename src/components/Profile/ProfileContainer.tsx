import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {getProfile, UserProfileType, getStatus, updateStatus} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'


export type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
    status: string
    updateStatus: string
}
export type OwnPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
}

export type PathProps = {
    userId: string 
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

export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus }), 
    withRouter
    // withAuthRedirect
)(ProfileContainer)