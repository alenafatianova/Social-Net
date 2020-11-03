import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post'
import {PostsType} from '../../../redux/store'


export type MyPostsType = {
    postsData: Array<PostsType>
    newPostText: string
    updateText: (newText: string) => void
    addPost: () => void
}
export default function MyPosts (props: MyPostsType) {
    
  let postElement = props.postsData.map(posts => <Post key={posts.id} id={posts.id} post={posts.post} likes={posts.likes}/> )
    
    let addNewPost = () => {
      props.addPost()
    }
    let newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateText(e.currentTarget.value)
    }
 return (
    <div>
        <h5>Previous Posts</h5>
        {postElement} 
        <div>
        <h5>New Post</h5>
        <textarea value={props.newPostText} onChange={newPostChange} placeholder='Whats new?' />
        <div>
          <button onClick={addNewPost}>send</button>{" "}
        </div>
      </div>
    </div>
    )
}
