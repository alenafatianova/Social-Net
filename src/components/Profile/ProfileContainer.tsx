import React from 'react' 
import {Profile} from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {StateType} from '../../redux/reduxStore'
import {setUserProfile} from '../../redux/ProfileReducer'
import { withRouter } from 'react-router-dom'
import {UserProfileType} from '../../redux/ProfileReducer'


export class ProfileContainer extends React.Component<{
    setUserProfile: (profile: UserProfileType) => void,
    profile: UserProfileType,
    match: any                                         //как типизировать???
}, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(
            response => {
                this.props.setUserProfile(response.data)
            }
        )
    }

    render () {
        return (
          <Profile {...this.props} profile={this.props.profile}/>
        )
    }          
}
let mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataConatinerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)