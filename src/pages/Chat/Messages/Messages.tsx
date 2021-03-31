import React, { useEffect, useState } from 'react'
import { ChatMessageItem, chatMessageType } from './ChatMessageItem'
import style from '../../../styles/ChatMessages.module.css'


export const webSocketChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const Messages = () => {
   
    const [chatMessages, setChatMessages] = useState<chatMessageType[]>([])
   
    useEffect(() => {
        webSocketChannel.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setChatMessages([...chatMessages, ...newMessages])
        })
    }, [chatMessages])
    
    return (
        <div>
           <div className={style.chatMessages}>
               {chatMessages.map((m, index) => <ChatMessageItem message={m} key={index} />)} 
            </div>
        </div>
    )
}
