import React from 'react'
import style from '../../../../styles/Post.module.css'


 export type PostPropsType = {
    post: string
    id: number
    likes: number
 }
export const Post = React.memo((props: PostPropsType) => {
    return (
            <div>
                <div className={style.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5W2tli7-nT4GT1zqSkZziPAeOoHuZUwljrQ&usqp=CAU" alt="user-avatar"/>
                <div>
                    {props.post} 
                    <div className={style.counter}>
                    <button className={style.likeCount}>{props.likes}</button>
                    <button className={style.likeButton}>Like</button>
                    </div>
                </div>
                </div>
            </div>
        )
    })
