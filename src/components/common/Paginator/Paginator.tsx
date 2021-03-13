import React, { useState } from 'react'
import style from './paginator.module.css'
import cn from 'classnames'

type paginatorProps = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalItemsCount: number 
    pageSize: number
    portionSize: number
}
export const Paginator: React.FC<paginatorProps> = React.memo((
    {onPageChanged, currentPage, totalItemsCount, pageSize, portionSize = 10}) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
   
    let pages = []
    for (let i = 1; i <= pagesCount; i ++ ) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionSizeNumber = (portionNumber - 1) * portionSize + 1;
    const rigthPortionSizeNumber = (portionNumber * portionSize)
    
    return (
        <div className={style.paginatorStyle}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Previous</button>}
             <div>
                    {
                        pages.filter(p => p >= leftPortionSizeNumber && p <= rigthPortionSizeNumber)
                        .map(p => {
                            return  <span key={p} className={cn({
                                [style.selectedPage] : currentPage === p 
                            },  style.pageNumber)}
                            onClick={() => {onPageChanged(p)}}
                        >{p}</span>})
                    }
                    {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
                </div>
        </div>
    )
})
