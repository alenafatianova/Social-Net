
//const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';
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
    messageData: [
      { id: 1, message: "Hi, whatsapp?" },
      { id: 2, message: "Go to the cinema tonight?" },
      { id: 3, message: "By the way, did you go to your aunt?" },
    ],
    //newMessageTextBody: ''
  }
export const DialogsReducer = (state = initialDialogsStore, action: DialogsActionsType): InitialStateType => {
  switch(action.type) {  
      // case UPDATE_MESSAGE_BODY: 
      // return  {
      //   ...state,
      //   //newMessageTextBody: action.messageBody
      // } 
      case SEND_MESSAGE: {
        let messageBody = action.newMessageTextBody;
        return {
          ...state,
          //newMessageTextBody: '',
          messageData: [...state.messageData, {id: 6, message: messageBody}]
        }
      }
      default: 
        return state;
    }
}
//export const updateMessageBodyAC = (messageBody: string) => ({type: 'UPDATE_MESSAGE_BODY', messageBody: messageBody} as const) 
export const sendMessageAC = (newMessageTextBody: string) => ({type: 'SEND_MESSAGE', newMessageTextBody} as const ) 

export type DialogsActionsType =  ReturnType <typeof sendMessageAC>
export type InitialStateType = typeof initialDialogsStore