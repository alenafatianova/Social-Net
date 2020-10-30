import React, { ChangeEvent, useState } from "react";
import classes from "./Dialogs.module.scss";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsActionsType, sendMessageCreator, messageBodyCreator} from '../../redux/DialogsReducer'
import { DialogsType, MessageType,} from './../../redux/store'

export type dialogDataType = {
  dialogsData: Array<DialogsType>
  messageData: Array<MessageType>
  newMessageTextBody: string
  dispatch: (action: DialogsActionsType) => void
}

let newMessage = React.createRef<HTMLTextAreaElement>()

export default function Dialogs(props: dialogDataType) {
  let dialogsElements = props.dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} /> ); 
  let messagesElements = props.messageData.map(message => <Message message={message.message} id={message.id} /> )
  let newMessageBody = newMessage.current?.value


  let sendMessageOnClick = () => {
    props.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(messageBodyCreator(e.currentTarget.value))
  }

  return (
    <div className={classes.users_dialogs}>
      <div className={classes.users}>
        {dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
      <div>
      <div>
        <textarea 
          ref={newMessage} 
          placeholder='Enter your message here'
          value={props.newMessageTextBody}
          onChange={onNewMessageChange}>
          </textarea></div>
        <div>
          <button onClick={sendMessageOnClick}>send</button>
        </div>
        </div>
      </div>
     
     <div>
       
     </div>
    </div>
  );
}
