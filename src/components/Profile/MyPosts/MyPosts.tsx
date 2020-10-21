import React from 'react';
import NewPost from './NewPost/NewPost';
import OldPost from './OldPosts/OldPost';
import {ActionsType, PostsType} from './../../../redux/state'



export type OldPostsType = {
    postsData: Array<PostsType>
    dispatch: (action: ActionsType) => void
    newPostText: string
}


export default function MyPosts(props: OldPostsType) {

    let postElement = props.postsData.map(posts => <OldPost key={posts.id} id={posts.id} post={posts.post} likes={posts.likes}/> )

    return (
        <div>
            <div>
            </div>
            <NewPost
                dispatch={props.dispatch} 
                newPostText={props.newPostText}  />
            <h5>Previous Posts</h5>
            { postElement }
            
        </div>
    )
}
