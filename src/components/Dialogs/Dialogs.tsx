import React, { useCallback } from "react";
import style from "../../styles/Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem"
import { DialogsReduxForm } from "./DialogsReduxForm";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux-store";




export type dialogDataType = {
  sendMessage: (newMessageTextBody: string) => void
}
export type NewMessageFormTypes = {
  newMessageTextBody: string
}
type MessageType = {
  message: string
  id: number
}

export const Dialogs = (props: dialogDataType) => {

  const dialogsData = useSelector((state: StateType) => state.dialogsPage.dialogsData)
  const messageData = useSelector((state: StateType) => state.dialogsPage.messageData)
  
  let dialogsElements = dialogsData.map(dialog =><DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>); 
  let messagesElements = messageData.map(message => <Message key={message.id} message={message.message} id={message.id} /> ) 

  const addNewMessage = useCallback((values: NewMessageFormTypes) => {
    props.sendMessage(values.newMessageTextBody)
  }, [props])
 

  return (
    <div className={style.users_dialogs}>
      <div className={style.users}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      <div>
      <div>
        <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
        </div>
      </div>
     <div>  
     </div>
    </div>
  )
}

export const Message: React.FC<MessageType> = (props) => {
  return (
    <div>
      <span className={style.message}>
        {props.message}
        </span>
    </div>
  );
}