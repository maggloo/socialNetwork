import React from 'react';
import {
   MyPostsType,
} from "../../../redux/store";
import {addPost, updateNewPostText} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: AppStateType): {postsData: Array<MyPostsType>, newPostText: string}  => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts);

export default MyPostsContainer;