import React from 'react';
import {
   dispatchPostType, MyPostsType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: AppStateType): {postsData: Array<MyPostsType>, newPostText: string}  => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: dispatchPostType) => void): {addPost: () => void, updateNewPostText: (text: string) => void, } => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) =>  dispatch(updateNewPostTextActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;