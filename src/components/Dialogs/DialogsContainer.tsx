import { connect } from 'react-redux';
import {ChangeEvent} from "react";
import {sendMessageCreator, messageBodyCreator} from '../../redux/DialogsReducer'
import {ActionsType, RootStateType} from '../../redux/store'
import Dialogs from "./Dialogs";


let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData
    
  }
}
let mapDispatchToProps = (dispatch: (actions: ActionsType)=> void) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    messageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(messageBodyCreator(e.currentTarget.value))
    }
  }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)