import React from 'react';
import NewPost from './NewPost/NewPost';
import OldPost from './OldPosts/OldPost';
import {PostsType} from '../../../redux/store'
import {ProfileActionsType} from './../../../redux/ProfileReducer'



export type OldPostsType = {
    postsData: Array<PostsType>
    dispatch: (action: ProfileActionsType) => void
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
