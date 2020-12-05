import {addPostActionCreator, ProfileActionsType} from '../../../redux/profile-reducer'
import {changeNewPostCreator} from '../../../redux/profile-reducer'
import {  RootStateType } from '../../../redux/store'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

 
let mapStateToProps = (state: RootStateType) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: (actions: ProfileActionsType) => void) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateText: (newText: string) => {
      dispatch(changeNewPostCreator(newText))
}
  } 
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)