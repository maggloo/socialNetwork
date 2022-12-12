import React, {FC} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    MyPostsType,
} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {TextArea} from "../../common/formsControls/FormsControls";

type MyPostsLocalType = {
    postsData: Array<MyPostsType>,
    addPost: (postBody: string) => void,
}


function MyPosts(props: MyPostsLocalType) {

    const postsElements = props.postsData.map((el: MyPostsType) => {
        return <Post key={el.id} message={el.message} likes={el.likesCount}/>
    })

    const addPostHandler = (formData: AddPostWithReduxFormType) => {
        props.addPost(formData.addPost);
    }

    return (
        <div className={s.descriptionBlock}>
            <h3>My posts</h3>
            <AddPostWithReduxForm onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type AddPostWithReduxFormType = {
    addPost: string
}

const maxLength10 = maxLengthCreator(10);

const AddPostForm: FC<InjectedFormProps<AddPostWithReduxFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Add Post' name='addPost'
                       component={TextArea} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostWithReduxForm = reduxForm<AddPostWithReduxFormType>({form: 'addPostForm'})(AddPostForm)

export default MyPosts;