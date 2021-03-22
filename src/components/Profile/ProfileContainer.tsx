import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {getProfile, getStatus, updateStatus, 
    savePhoto, saveProfile} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
import { compose } from 'redux'
import { UserProfileType } from '../../types/types'


type mapStateToPropsType = ReturnType<typeof mapStateToProps>

export type DispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    savePhoto: (file: File) => void
    updateStatus:  (status: string) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
}

type PathParamsProps = {
    userId: string
}

type ProfileContainerProps = mapStateToPropsType & DispatchPropsType & RouteComponentProps<PathParamsProps>  

export class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    updateProfile() {
        let userId: number | null = +this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if(!userId) {
            console.error('Some error')
        } else {
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
      this.updateProfile();
    }

    componentDidUpdate(prevProps: ProfileContainerProps, prevState: ProfileContainerProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
       this.updateProfile();
    }

    componentWillUnmount(): void {

    }

    render() {
        return (
            <Profile {...this.props}
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

export default compose<React.ComponentType>(connect(mapStateToProps, 
    {getProfile, getStatus, updateStatus, savePhoto, saveProfile }), 
    withRouter
)(ProfileContainer)