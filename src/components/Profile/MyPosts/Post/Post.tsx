import React from 'react'
import classes from './Post.module.scss'


 export type PostPropsType = {
    post: string
    id: number
    likes: number
 }
export function Post(props: PostPropsType) {
    return (
            <div>
                <div className={classes.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5W2tli7-nT4GT1zqSkZziPAeOoHuZUwljrQ&usqp=CAU" alt="user-avatar"/>
                <div>
                    {props.post} 
                    <div className={classes.counter}>
                    <button className={classes.likeCount}>{props.likes}</button>
                    <button className={classes.likeButton}>Like</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
