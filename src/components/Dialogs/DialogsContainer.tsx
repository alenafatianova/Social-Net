import { connect } from 'react-redux';
import {ChangeEvent} from "react";
import {sendMessageCreator, messageBodyCreator, DialogsActionsType} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import { StateType } from '../../redux/redux-store';


let mapStateToProps = (state: StateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageTextBody,
    isAuth: state.auth.isAuth
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