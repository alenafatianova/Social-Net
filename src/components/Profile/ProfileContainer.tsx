import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {getProfile, UserProfileType, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
import { compose } from 'redux'


export type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
    status: string
    authorizedUserId: number 
}
export type DispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    savePhoto: (file: File) => void
    updateStatus:  (status: string) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
}

type PathParamsProps = {
    userId: any
}

export type ProfileContainerProps = RouteComponentProps<PathParamsProps> & DispatchPropsType & mapStateToPropsType

export class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    updateProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
      this.updateProfile();
    }
    componentDidUpdate(prevProps: ProfileContainerProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
       this.updateProfile();
    }

    render() {
        return (
            <Profile {...this.props} 
                    saveProfile={this.props.saveProfile}
                    savePhoto={this.props.savePhoto}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
            />
        )
    }   
}    


let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile }), 
    withRouter
)(ProfileContainer)