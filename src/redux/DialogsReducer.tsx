import React from 'react'
import {MessagePageType} from './store'

const MESSAGE_REPLY = 'MESSAGE_REPLY';
const SEND_MESSAGE = 'SEND-MESSAGE'; 

export const DialogsReducer = (state: MessagePageType, action: DialogsActionsType) => {

    switch(action.type) {
        case 'MESSAGE_REPLY': 
        state.newMessageTextBody = action.messageBody;
        return state;
        case 'SEND_MESSAGE': 
        let messageBody = state.newMessageTextBody;
        state.messageData.push({id: 6, message: messageBody})
        state.newMessageTextBody = '';
        return state;
        default: 
        return state;
    }
}
export const messageBodyCreator = (messageBody: string) => ({type: 'MESSAGE_REPLY', messageBody: messageBody}) as const
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}) as const

export type DialogsActionsType = ReturnType <typeof messageBodyCreator> | ReturnType <typeof sendMessageCreator>