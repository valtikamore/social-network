import React, {FC} from 'react'
import s from "./paginator.module.css";


interface PaginatorProps {
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator:FC<PaginatorProps> = ({totalUsersCount,currentPage,pageSize,onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => <span
                onClick={() => onPageChanged(p)}
                key={i} className={currentPage === p ? s.selected : ''}
            >{p}</span>)}
        </div>
    )
}
