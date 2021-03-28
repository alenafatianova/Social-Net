import { dialogsType, messagesType } from "../types/types";
import { InferActionsType } from "./redux-store";

let initialDialogsState = {
    dialogsData: [
      { id: 1, name: "Chandler" },
      { id: 2, name: "Monika" },
      { id: 3, name: "Rachel" },
      { id: 4, name: "Ross" },
      { id: 5, name: "Joey" },
      { id: 6, name: "Jennisse" },
      { id: 7, name: "Phoebe" },
    ] as Array<dialogsType>,
    messageData: [
      { id: 1, message: "Hi, whatsapp?" },
      { id: 2, message: "Go to the cinema tonight?" },
      { id: 3, message: "By the way, did you go to your aunt?" },
    ] as Array<messagesType>,
}

export type InitialStateType = typeof initialDialogsState
export type DialogsActionsType = InferActionsType<typeof dialogsActions>

export const DialogsReducer = (state = initialDialogsState, action: DialogsActionsType): InitialStateType => {
  switch(action.type) {  
      case 'SEND_MESSAGE': {
        let messageBody = action.newMessageTextBody;
        return {
          ...state,
          messageData: [...state.messageData, {id: 6, message: messageBody}]
        }
      }
      default: 
        return state;
    }
}
export const dialogsActions = {
  sendMessage: (newMessageTextBody: string) => ({type: 'SEND_MESSAGE', newMessageTextBody} as const) 
}


