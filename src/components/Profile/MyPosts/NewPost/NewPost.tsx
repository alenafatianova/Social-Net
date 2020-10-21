import React, { ChangeEvent } from "react";
import { ActionsType, addPostActionCreator,changeNewPostCreator } from "../../../../redux/state";

export type addPostType = {
  //updateText: (newText: string) => void
  // addPost: (postMessage: string) => void
  newPostText: string
  dispatch: (action: ActionsType) => void
};




export default function NewPost(props: addPostType) {
  

  let addNewPost = () => {
      //  props.addPost(props.newPostText)
      props.dispatch(addPostActionCreator())
  }

let newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
     //props.updateText(e.currentTarget.value)
    props.dispatch(changeNewPostCreator(e.currentTarget.value ))
}

  return (
    <div>
      <div>
        <h5>New Post</h5>
        <textarea value={props.newPostText} onChange={newPostChange} placeholder='Whats new?' />
        <div>
          <button onClick={addNewPost}>send</button>{" "}
        </div>
      </div>
    </div>
  );
}
