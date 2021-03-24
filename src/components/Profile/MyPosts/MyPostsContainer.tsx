import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { StateType } from '../../../redux/redux-store'
import { ProfileActions, ProfileActionsType } from '../../../redux/profile-reducer'

 
let mapStateToProps = (state: StateType) => {
  return {
    postsData: state.profilePage.postsData,
  }
}
let mapDispatchToProps = (dispatch: (actions: ProfileActionsType) => void) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(ProfileActions.addPost(newPostText))
    },
  } 
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts)
