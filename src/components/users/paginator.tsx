import React, {FC, useState} from 'react'
import cn from "classnames";
import styles from './paginatio.module.scss'

interface PaginatorPropsType {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    portionSize: number
}

export const Paginator: FC<PaginatorPropsType> = props => {
    let {pageSize, currentPage, totalUsersCount, onPageChanged, portionSize} = props
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> {'<'} </button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>{'>'}</button>}


        </div>
    )
}


