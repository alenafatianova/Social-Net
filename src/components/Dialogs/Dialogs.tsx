import React, {ChangeEvent}from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import { DialogsType, MessageType,} from './../../redux/store'
import { DialogsReduxForm, messageFormType } from "./DialogsReduxForm";
import { Redirect } from "react-router-dom";
//import { Redirect } from "react-router-dom";

export type dialogDataType = {
  dialogsData: Array<DialogsType>
  messageData: Array<MessageType>
  isAuth: boolean
  //sendNewMessage: () => void
  sendMessage: (values: any) => void
}
type UserMessagePropsType = {
  message: string
  id: number
}

 
export function Dialogs (props: dialogDataType) {

  let dialogsElements = props.dialogsData.map(dialog =>  <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={`https://api.adorable.io/avatars/96/${dialog.name}.png`} /> ); 
  let messagesElements = props.messageData.map(message => <Message key={message.id} message={message.message} id={message.id} /> )

   //let sendMessageOnClick = props.sendNewMessage
    

  const addNewMessage = (values: any) => {
    props.sendMessage(values.newMessageTextBody)
  }

  if(props.isAuth) return <Redirect to='/login'/>

  return (
    <div className={classes.users_dialogs}>
      <div className={classes.users}>
        {dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
      <div>
      <div>
        <DialogsReduxForm onSubmit={addNewMessage}/>
        {/* <textarea 
          ref={newMessage} 
          placeholder='Enter your message here'
          value={props.newMessageText}
          onChange={onNewMessageChange}>
          </textarea> */}
        </div>
        {/* <div>
          <button onClick={sendMessageOnClick}>send</button>
        </div>  */}
        </div>
      </div>
     <div>  
     </div>
    </div>
  );
}

export  function Message(props: UserMessagePropsType) {
  return (
    <div>
      <span className={classes.message}>
        {props.message}
        </span>
    </div>
  );
}