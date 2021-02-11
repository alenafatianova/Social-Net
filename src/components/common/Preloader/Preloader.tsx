import React from 'react'
import style from './Preloader.module.css'

export function Preloader() {
    return (
        <div>
            <div className={style.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
