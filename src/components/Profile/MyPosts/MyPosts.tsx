import React from 'react';
import NewPost from './NewPost/NewPost';
import OldPost from './OldPosts/OldPost';
import {PostsType} from './../../../redux/state'



export type OldPostsType = {
    id: number
    post: string
    likes: number
    postsData: Array<PostsType>
}


export default function MyPosts(props: OldPostsType) {
let postElement = props.postsData.map(posts => <OldPost id={posts.id} post={posts.post} likes={posts.likes}/> )

    return (
        <div>
            <div>
            </div>
            <NewPost/>
            <h5>Previous Posts</h5>
            { postElement }
        </div>
    )
}
