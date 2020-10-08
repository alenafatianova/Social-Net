import React, { ChangeEvent } from "react";

export type addPostType = {
  addPost: (postMessage: string) => void
  newPostText: string
  updateText: (newText: string) => void
};

export default function NewPost(props: addPostType) {
  

  let addNewPost = () => {
      props.addPost(props.newPostText)
  }

let newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateText(e.currentTarget.value)
}

  return (
    <div>
      <div>
        <h5>New Post</h5>
        <textarea value={props.newPostText} onChange={newPostChange}  />
        <div>
          <button onClick={addNewPost}>send</button>{" "}
        </div>
      </div>
    </div>
  );
}
