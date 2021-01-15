import { connect } from 'react-redux';
import { ComponentType} from "react";
import {sendMessageAC, messageBodyAC} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import { StateType } from '../../redux/redux-store';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state: StateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageTextBody,
  }
}

// let mapDispatchToProps = (dispatch: (actions: DialogsActionsType)=> void) => {
//   return {
//     sendMessage: () => {
//       dispatch(sendMessageAC())
//     },
//     messageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
//       let body = e.currentTarget.value
//       dispatch(messageBodyAC(body))
//     }
//   }
// }

export default compose<ComponentType>(connect(mapStateToProps, {sendMessageAC , messageBodyAC}), withAuthRedirect)(Dialogs)