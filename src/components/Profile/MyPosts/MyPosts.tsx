import React from 'react';
import NewPost from './NewPost/NewPost';
import OldPost from './OldPosts/OldPost';
import {PostsType} from './../../../redux/state'



export type OldPostsType = {
    postsData: Array<PostsType>
    addPost: (postMessage: string)=> void
    updateText: (newText: string) => void
    newPostText: string
}


export default function MyPosts(props: OldPostsType) {

    let postElement = props.postsData.map(posts => <OldPost key={posts.id} id={posts.id} post={posts.post} likes={posts.likes}/> )

    return (
        <div>
            <div>
            </div>
            <NewPost 
                addPost={props.addPost} 
                newPostText={props.newPostText} 
                updateText={props.updateText} />
            <h5>Previous Posts</h5>
            { postElement }
            
        </div>
    )
}
