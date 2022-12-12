import React from 'react';
import {
   MyPostsType,
} from "../../../redux/store";
import {addPost} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: AppStateType): {postsData: Array<MyPostsType>}  => {
    return {
        postsData: state.profile.postsData
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(MyPosts);

export default MyPostsContainer;