import React from "react";
import classes from "./Message.module.scss";

type UserMessagePropsType = {
  message: string
  id: number
}

export default function Message(props: UserMessagePropsType) {
  return (
    <div>
      <span className={classes.message}>
        {props.message}
        </span>
    </div>
  );
}
