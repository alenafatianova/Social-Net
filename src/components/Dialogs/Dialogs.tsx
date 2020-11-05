import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem"
import { DialogsType, MessageType,} from './../../redux/store'

export type dialogDataType = {
  dialogsData: Array<DialogsType>
  messageData: Array<MessageType>
  messageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
  sendMessage: () => void
}
type UserMessagePropsType = {
  message: string
  id: number
}
  let newMessage = React.createRef<HTMLTextAreaElement>()
 
export default function Dialogs (props: dialogDataType) {
  
  let dialogsElements = props.dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} /> ); 
  let messagesElements = props.messageData.map(message => <Message message={message.message} id={message.id} /> )
  let newMessageBody = newMessage.current?.value

  let sendMessageOnClick = props.sendMessage
    
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.messageBody(e) 
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
          value={newMessageBody}
          onChange={onNewMessageChange}>
          </textarea>
        </div>
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

export  function Message(props: UserMessagePropsType) {
  return (
    <div>
      <span className={classes.message}>
        {props.message}
        </span>
    </div>
  );
}