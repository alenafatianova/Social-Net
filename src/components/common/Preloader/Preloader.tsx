import React from 'react'
import style from './Preloader.module.css'

export const Preloader = React.memo(() => {
    return (
        <div>
            <div className={style.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
})
