import {dispatchToPropsType, MyPosts, myPostsMapType} from './MyPosts'
import {connect} from 'react-redux'
import { StateType } from '../../../redux/redux-store'
import { ProfileActions } from '../../../redux/profile-reducer'

 
let mapStateToProps = (state: StateType) => {
  return {
    postsData: state.profilePage.postsData,
  }
}


const MyPostsContainer = connect<myPostsMapType, dispatchToPropsType, {}, StateType>(mapStateToProps, 
  {addPost: ProfileActions.addPost})(MyPosts)
export default MyPostsContainer;