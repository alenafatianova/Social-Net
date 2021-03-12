import React from 'react'
import style from '../../Users/Users.module.css'

type paginatorProps = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalUsersCount: number 
    pageSize: number
}
export const Paginator: React.FC<paginatorProps> = React.memo((props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   
    let pages = []
    for (let i = 1; i <= pagesCount; i ++ ) {
        pages.push(i);
    }
    return (
        <div>
             <div>
                    {pages.map(p => {
                       return  <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
                       onClick={(e) => {props.onPageChanged(p)}}
                       >{p}</span>
                    })}
                    
                </div>
        </div>
    )
})
