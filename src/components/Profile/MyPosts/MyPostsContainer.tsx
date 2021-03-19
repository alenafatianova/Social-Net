import {addPostActionCreator, ProfileActionsType} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { StateType } from '../../../redux/redux-store'

 
let mapStateToProps = (state: StateType) => {
  return {
    postsData: state.profilePage.postsData,
  }
}
let mapDispatchToProps = (dispatch: (actions: ProfileActionsType) => void) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText))
    },
  } 
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts)
