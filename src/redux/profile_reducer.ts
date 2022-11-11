import {actionsType, MyPostsType, ProfilePostsType, stateType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState: ProfilePostsType = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 20},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bye', likesCount: 15},
        {id: 4, message: 'Hi', likesCount: 11},
    ],
        newPostText: ''
}

export const profileReducer = (state: ProfilePostsType = initialState, action: actionsType): ProfilePostsType => {



    switch (action.type) {
        case ADD_POST:
            let newPost: MyPostsType = {
                id: state.postsData[state.postsData.length-1].id + 1,
                message: state.newPostText,
                likesCount: 15
            };
            return {...state, newPostText:  '', postsData: [...state.postsData, newPost]};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText ? action.postText : ''};
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST} as const);

export const updateNewPostTextActionCreator = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, postText: text} as const
    )