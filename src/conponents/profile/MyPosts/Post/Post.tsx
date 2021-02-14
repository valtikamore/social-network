import React from "react";
import classes from "./Post.module.css"

type postType = {
    message: string
    likeCount: number
}
const Post = (props: postType) => {
    return (
        <div className={classes.post}>
                <img className={classes.avatar}
                     src="https://image.freepik.com/free-vector/cute-avocado-cartoon-icon_138676-1820.jpg" alt="ss"/>
            <div className={classes.message}>
                {props.message}
            </div>

            <div className={classes.like}>
                <button>+</button>
                {props.likeCount}</div>
        </div>
    )
}
export default Post