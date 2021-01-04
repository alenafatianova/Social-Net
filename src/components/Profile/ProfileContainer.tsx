import React from 'react' 
import {connect} from 'react-redux'
import {StateType} from '../../redux/redux-store'
import {getProfile, UserProfileType} from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {Profile} from './Profile/Profile'
import { Redirect } from "react-router";


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

class  ProfileContainer extends React.Component<ProfileContainerProps> {
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)
    }
    render() {

        if (this.props.isAuth === false) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile {...this.props} 
                    profile={this.props.profile}
                    />
        )
    }   
}    

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerComponent = (withRouter(ProfileContainer))
export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)