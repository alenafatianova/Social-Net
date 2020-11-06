import { connect } from 'react-redux';
import {ChangeEvent} from "react";
import {sendMessageCreator, messageBodyCreator, DialogsActionsType} from '../../redux/DialogsReducer'
import { RootStateType} from '../../redux/store'
import Dialogs from "./Dialogs";


let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageTextBody
  }
}
let mapDispatchToProps = (dispatch: (actions: DialogsActionsType)=> void) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    messageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
      let body = e.currentTarget.value
      dispatch(messageBodyCreator(body))
    }
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)