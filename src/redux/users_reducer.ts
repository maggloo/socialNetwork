import {actionsType, MessagePropsType, MessagesPageType} from "./store";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type initialStateUsersPageType = {
    users: Array<UserType>
}

export type UserType = {
    id: number,
    photos: {
        small?: string,
        large?: string,
    },
    followed: boolean,
    name: string,
    status: string,
    /*location:
        {
            city: string,
            country: string
        }*/
}

let initialState: initialStateUsersPageType = {
    users: []
}

export const usersReducer = (state: initialStateUsersPageType = initialState, action: actionsTypes): initialStateUsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
}

type followAT = ReturnType<typeof followAC>;
type unfollowAT = ReturnType<typeof unFollowAC>;
type setUsersAC = ReturnType<typeof setUsersAC>;
export type actionsTypes = followAT | unfollowAT | setUsersAC;


export const followAC = (userID: number) => ({type: FOLLOW, userID} as const);
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
