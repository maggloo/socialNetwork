import React from 'react';
import s from "./Post.module.css";

type PostType = {
    message: string,
    likes: number
}

function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img src={'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}></img>
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    )
}

export default Post;