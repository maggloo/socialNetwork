import {MyPostsType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_NEW_PROFILE = 'SET_NEW_PROFILE';

type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}

export type ProfilePageType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small?: string,
        large?: string
    }
}

export type ProfilePostsType = {
    postsData: Array<MyPostsType>,
    newPostText: string,
    profile: ProfilePageType | null
}

let initialState: ProfilePostsType = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 20},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bye', likesCount: 15},
        {id: 4, message: 'Hi', likesCount: 11},
    ],
    newPostText: '',
    profile: null
        /*{
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    }*/
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
        case SET_NEW_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

type addPostAT = ReturnType<typeof addPost>;
type updateNewPostTextAT = ReturnType<typeof updateNewPostText>;
type setUserProfileAT = ReturnType<typeof setUserProfile>;

type actionsType = addPostAT | updateNewPostTextAT | setUserProfileAT

export const addPost = () => ({type: ADD_POST} as const);
export const updateNewPostText = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, postText: text} as const
    )
export const setUserProfile = (profile: any) => ({type: SET_NEW_PROFILE, profile} as const);