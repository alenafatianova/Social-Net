import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'
import { AddPostReduxForm } from './PostsReduxForm';


export type MyPostsType = {
    postsData: Array<PostsType>
    //updateText: (newText: string) => void
    addPost: (newPostText: string) => void
}
export default function MyPosts (props: MyPostsType) {
    
  let postElement = props.postsData.map(posts => <Post key={posts.id} id={posts.id} post={posts.post} likes={posts.likes}/> )
    
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
        {/* <textarea 
        value={props.newPostText} 
        onChange={newPostChange} 
        placeholder='Whats new?' />
        <div>
          <button onClick={addNewPost}>send</button>{" "}
        </div> */}
      </div>
    </div>
    )
}
