import {addPostActionCreator, ProfileActionsType} from '../../../redux/profile-reducer'
import {  RootStateType } from '../../../redux/store'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import { compose } from 'redux'

 
let mapStateToProps = (state: RootStateType) => {
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
