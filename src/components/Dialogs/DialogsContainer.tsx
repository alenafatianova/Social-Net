import { connect } from 'react-redux';
import React, {ChangeEvent} from "react";
import {sendMessageCreator, messageBodyCreator, DialogsActionsType} from '../../redux/dialogs-reducer'
import Dialogs, { dialogDataType } from "./Dialogs";
import { StateType } from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';



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

//------------AuthRedirectComponent is a HOC, created as wrapping component for checking if user is logged in-----
let AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)