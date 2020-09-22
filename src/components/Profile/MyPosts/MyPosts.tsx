import React from 'react';
import NewPost from './NewPost/NewPost';
import OldPost from './OldPosts/OldPost';
import {PostType} from '../Profile'



export type PropsType = {
    postsData: Array<PostType>
}


export default function MyPosts(props: PropsType) {


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
