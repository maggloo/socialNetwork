import {MyPostsType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_NEW_PROFILE = 'SET_NEW_PROFILE';
const SET_NEW_STATUS = 'SET_NEW_STATUS';

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
    profile: ProfilePageType | null,
    status: string
}

let initialState: ProfilePostsType = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 20},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bye', likesCount: 15},
        {id: 4, message: 'Hi', likesCount: 11},
    ],
    profile: null,
    status: ''
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
                id: state.postsData[state.postsData.length - 1].id + 1,
                message: action.postBody,
                likesCount: 15
            };
            return {...state, postsData: [...state.postsData, newPost]};
        case SET_NEW_PROFILE:
            return {...state, profile: action.profile};
        case "SET_NEW_STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}

type addPostAT = ReturnType<typeof addPost>;
type setUserProfileAT = ReturnType<typeof setUserProfile>;
type setUserStatusAT = ReturnType<typeof setUserStatus>;

type actionsType = addPostAT | setUserProfileAT | setUserStatusAT

export const addPost = (postBody: string) => ({type: ADD_POST, postBody} as const);

export const setUserProfile = (profile: ProfilePageType | null) => ({type: SET_NEW_PROFILE, profile} as const);
export const setUserStatus = (status: string) => ({type: SET_NEW_STATUS, status} as const);

export const setUserAPIProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.setUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res));
        })
}


export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res));
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}