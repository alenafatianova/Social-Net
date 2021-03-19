import React, { useCallback } from "react";
import style from "../../styles/Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem"
import { DialogsReduxForm } from "./DialogsReduxForm";
import { Redirect } from "react-router-dom";
import { dialogsType, messagesType } from "../../types/types";




export type dialogDataType = {
  dialogsData: Array<dialogsType>
  messageData: Array<messagesType>
  isAuth: boolean
  sendMessage: (values: any) => void
}
type UserMessagePropsType = {
  message: string
  id: number
}

export const Dialogs = (props: dialogDataType) => {

  let dialogsElements = props.dialogsData.map(dialog =>  <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={`https://api.adorable.io/avatars/96/${dialog.name}.png`} /> ); 
  let messagesElements = props.messageData.map(message => <Message key={message.id} message={message.message} id={message.id} /> ) 

  const addNewMessage = useCallback((values: any) => {
    props.sendMessage(values.newMessageTextBody)
  }, [props])

  if(props.isAuth) return <Redirect to='/login'/>

  return (
    <div className={style.users_dialogs}>
      <div className={style.users}>
        {dialogsElements}</div>
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
  );
}

export const Message = (props: UserMessagePropsType) => {
  return (
    <div>
      <span className={style.message}>
        {props.message}
        </span>
    </div>
  );
}