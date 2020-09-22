import React from "react";
import classes from "./Dialogs.module.scss";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import state from './../../redux/state'


type MessageType = {
  message: string
  dialogsData: Array<state.DialogsPageType>
}

export default function Dialogs(props: MessageType) {

  state
  
  let dialogsElements = props.dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} /> ); 
  let messagesElements = props.messageData.map(message => <Message message={message.message} id={message.id} /> )
  return (
    <div className={classes.users_dialogs}>
      <div className={classes.users}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
}
