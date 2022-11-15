import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    MyPostsType,
} from "../../../redux/store";

type MyPostsLocalType = {
    postsData: Array<MyPostsType>,
    addPost: () => void,
    updateNewPostText: (text: string) => void,
    newPostText: string
}


function MyPosts(props: MyPostsLocalType) {

    const postsElements = props.postsData.map((el: MyPostsType) => {
        return <Post key={el.id} message={el.message} likes={el.likesCount}/>
    })

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current!.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.descriptionBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;