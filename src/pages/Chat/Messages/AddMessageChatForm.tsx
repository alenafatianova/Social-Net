import React, { useState } from 'react'
import { webSocketChannel } from './Messages'

export const AddMessageChatForm = () => {
    
    // newMessage is a string which I will send to another person, this is not new message from the ws channel
    const [newMessage, setNewMessage] = useState('')
    
    const sendChatMessage = () => {
        if(!newMessage) {return}
        webSocketChannel.send(newMessage)
        setNewMessage('')
    }
    return (
        <div>
           <div>
               <textarea value={newMessage}
                    name="addChatMessage" 
                    onChange={(e) => setNewMessage(e.currentTarget.value)}>
                </textarea>
            </div> 
           <div><button onClick={sendChatMessage}>Send</button></div>
        </div>
    )
}
