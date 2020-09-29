import React from 'react'

let newPostElement = React.createRef<HTMLTextAreaElement>()

let  addNewPost= () => {
   let text = newPostElement.current?.value;
   alert(text);
}


export default function NewPost() {
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
