import React from "react";
import classes from "./Message.module.scss";

type UserMessagePropsType = {
  message: string
  id: number
}

let newMessage = React.createRef<HTMLTextAreaElement>()

let messageReply = () => {
  let text = newMessage.current?.value
  alert(text);
}

export default function Message(props: UserMessagePropsType) {
  return (
    <div>
      <span className={classes.message}>{props.message}</span>
      <div><textarea ref={newMessage}></textarea></div>
      <button onClick={messageReply}>send</button>
    </div>
  );
}
