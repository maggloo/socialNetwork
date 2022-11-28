import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


export type DataType = {
    id: number,
    login: string,
    email: string,
    isAuth: boolean,
}

export type AuthReducerType = {
    data: DataType,
    messages: Array<string>,
    fieldsErrors: Array<any>,
    resultCode: number
}

let initialState: AuthReducerType = {
    data: {
        id: 0,
        login: '',
        email: '',
        isAuth: false,
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0
}

export const authReducer = (state: AuthReducerType = initialState, action: actionsType): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.userData
            }
        default:
            return state;
    }
}

type SetUserDataAT = ReturnType<typeof setAuthUserData>;

type actionsType = SetUserDataAT

export const setAuthUserData = ({id, email, login}: DataType) => (
    {type: SET_USER_DATA, userData: {id, email, login, isAuth: true}} as const
)

export const authUserTC = () => {
    return (dispatch: Dispatch) => {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data));
                }
            })
    }
}
