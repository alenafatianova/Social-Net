import React, { useEffect } from 'react'
import { AddMessageChatForm } from './Messages/AddMessageChatForm'
import { Messages } from './Messages/Messages'



export const Chat = () => {
    
    return (
        <div>
           <Messages/>
           <AddMessageChatForm/> 
        </div>
    )
}
