import React from 'react';
import NewPost from './NewPost/NewPost';
import OldPost from './OldPosts/OldPost';
import {addPost, PostsType} from './../../../redux/state'



export type OldPostsType = {
    postsData: Array<PostsType>
    addPost: (postMessage: string)=> void
}


export default function MyPosts(props: OldPostsType) {

    let postElement = props.postsData.map(posts => <OldPost id={posts.id} post={posts.post} likes={posts.likes}/> )

    return (
        <div>
            <div>
            </div>
            <NewPost addPost={addPost} />
            <h5>Previous Posts</h5>
            { postElement }
            
        </div>
    )
}
