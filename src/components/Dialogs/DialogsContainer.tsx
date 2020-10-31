import React, {ChangeEvent} from "react";
import {sendMessageCreator, messageBodyCreator} from '../../redux/DialogsReducer'
import store from '../../redux/store'
import Dialogs from "./Dialogs";

export default function DialogsContainer () {

  let sendMessageOnClick = () => {
    store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    store.dispatch(messageBodyCreator(e.currentTarget.value))
  }
  return <Dialogs 
    dispatch={store.dispatch}
    newMessageTextBody={store._state.dialogsPage.newMessageTextBody}
    dialogsData={store._state.dialogsPage.dialogsData} 
    messageData={store._state.dialogsPage.messageData}
    messageBody={onNewMessageChange} 
    sendMessage={sendMessageOnClick}/>
}
