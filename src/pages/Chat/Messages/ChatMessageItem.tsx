import React from 'react'
import style from '../../../styles/ChatMessageItem.module.css'

export type chatMessageType = {
    message: string,
    userId: number,
    photo: string,
    userName: string
}

export const ChatMessageItem: React.FC<{message: chatMessageType}> = ({message}) => {
    
    return (
        <div>
            <div className={style.userAvatarContainer}>
                <img src={message.photo} alt="user-avatar"/>
                {message.userName}
            </div>
            <div>{message.message}</div>
        </div>
    )
}
