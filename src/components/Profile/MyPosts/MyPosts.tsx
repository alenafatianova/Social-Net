import React from 'react';
import { PostsDataType } from '../../../types/types';
import {Post} from './Post/Post'
import { addPostFormType, AddPostReduxForm } from './AddPostsReduxForm';
import { useDispatch } from 'react-redux';
import { ProfileActions } from '../../../redux/profile-reducer';


export type myPostsMapType = {
    postsData: Array<PostsDataType>
}
export type dispatchToPropsType = {
  addPost: (newPostText: string) => void
}



export const MyPosts = React.memo<myPostsMapType & dispatchToPropsType>((props) => {

  let postElement = props.postsData.map(posts =>
  <Post key={posts.id} post={posts.post} likes={posts.likes}/> 
)
//--- function for adding new post -----
const dispatch = useDispatch()
const addNewPost = (values: addPostFormType) => {
  dispatch(ProfileActions.addPost(values.newPostText))
}
    
  return (
    <div>
        <h5>Previous Posts</h5>
        {postElement} 
        <div>
        <h5>New Post</h5>
        <AddPostReduxForm onSubmit={addNewPost}/>
      </div>
    </div>
    )
  }
)