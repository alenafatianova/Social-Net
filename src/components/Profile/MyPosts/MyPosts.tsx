import React from 'react';
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'
import { AddPostReduxForm } from './PostsReduxForm';


export type MyPostsType = {
    postsData: Array<PostsType>
    addPost: (newPostText: string) => void
}
export const MyPosts = React.memo((props: MyPostsType) => {
    
let postElement = props.postsData.map(posts =>
  <Post key={posts.id} id={posts.id} post={posts.post} likes={posts.likes}/> 
)
    
const addNewPost = (values: any) => {
  props.addPost(values.newPostText)
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