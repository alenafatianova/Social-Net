import React from 'react'
import classes from './MyPost.module.scss'



type PostType = {
    post: string
}


export default function MyPost(props: PostType) {
  
    return (
        <div>
            <div className={classes.postOne}>
            <textarea name=""></textarea>
            </div>
            <div className={classes.postTwo}>
                <textarea name=""></textarea>
            </div>
        </div>
    )
}
