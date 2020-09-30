import React from 'react';
import {addPost} from './../../../../redux/state'

let newPostElement = React.createRef<HTMLTextAreaElement>()

let  addNewPost = () => {
    if(newPostElement.current) {
        let text = newPostElement.current.value= ''
        addPost(text);
    } 
}

export type addPostType = {
    addPost: (postMessage: string)=> void
}

export default function NewPost(props: addPostType) {
    return (
        <div>
            <div>
            <h5>New Post</h5>
            <textarea ref={newPostElement} ></textarea>
            <div><button onClick={ addNewPost }>send</button> </div>
            </div>
        </div>
    )
}
