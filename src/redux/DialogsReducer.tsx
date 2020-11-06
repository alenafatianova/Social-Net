import { DialogsPageType } from "./store";
const MESSAGE_REPLY = 'MESSAGE_REPLY';
const SEND_MESSAGE = 'SEND_MESSAGE'; 

let initialDialogsStore = {
    dialogsData: [
      { id: 1, name: "Chandler" },
      { id: 2, name: "Monika" },
      { id: 3, name: "Rachel" },
      { id: 4, name: "Ross" },
      { id: 5, name: "Joey" },
      { id: 6, name: "Jennisse" },
      { id: 7, name: "Phoebe" },
    ],
    newMessageTextBody: "",
    messageData: [
      { id: 1, message: "Hi, whatsapp?" },
      { id: 2, message: "Go to the cinema tonight?" },
      { id: 3, message: "By the way, did you go to your aunt?" },
    ],
  }
export const DialogsReducer = (state = initialDialogsStore, action: DialogsActionsType) => {
    switch(action.type) {
        
      case MESSAGE_REPLY: 
        let stateCopy = {...state}
        stateCopy.newMessageTextBody = action.messageBody;
        return stateCopy;
        
        case SEND_MESSAGE: {
        let stateCopy = {...state}
        stateCopy.messageData = [...state.messageData]
        let messageBody = stateCopy.newMessageTextBody;
        stateCopy.messageData.push({id: 6, message: messageBody})
        stateCopy.newMessageTextBody = '';
        return stateCopy;
        }
        default: 
        return state;
    }
}
export const messageBodyCreator = (messageBody: string) => ({type: 'MESSAGE_REPLY', messageBody: messageBody}) as const
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}) as const

export type DialogsActionsType = ReturnType <typeof messageBodyCreator> | ReturnType <typeof sendMessageCreator>