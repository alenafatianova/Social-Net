import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post'
import {PostsType, StoreType} from '../../../redux/store'
import { ProfileActionsType } from '../../../redux/ProfileReducer';


export type MyPostsType = {
    store: StoreType
    postsData: Array<PostsType>
    newPostText: string
    updateText: (newText: string) => void
    addPost: (postMessage: string) => void
    dispatch: (action: ProfileActionsType) => void
}
export default function MyPosts (props: MyPostsType) {
    let postElement = props.postsData.map(posts => <Post key={posts.id} id={posts.id} post={posts.post} likes={posts.likes}/> )
    
    let addNewPost = () => {
      props.addPost(props.newPostText)
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
