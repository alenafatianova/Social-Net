import React, { useEffect, useState } from 'react'
import { ChatMessageItem, chatMessageType } from './ChatMessageItem'
import style from '../../../styles/ChatMessages.module.css'


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const Messages = () => {
   
    const [chatMessages, setChatMessages] = useState<chatMessageType[]>([])
   
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setChatMessages(JSON.parse(e.data))
        })
    }, [])
    return (
        <div>
           <div className={style.chatMessages}>
               {chatMessages.map((m, index) => <ChatMessageItem message={m} key={index} />)} 
            </div>
        </div>
    )
}
