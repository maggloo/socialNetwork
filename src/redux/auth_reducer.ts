import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormDataType} from "../components/Login/Login";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_USER = 'LOGIN_USER';


export type DataType = {
    id: string,
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
        id: '',
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
        case "LOGIN_USER":
            return {
                ...state,
                data: {
                    ...state.data,
                    isAuth: action.isAuth
                }
            }
        default:
            return state;
    }
}

type SetUserDataAT = ReturnType<typeof setAuthUserData>;
type loginMeAT = ReturnType<typeof loginMe>;

type actionsType = SetUserDataAT | loginMeAT

export const setAuthUserData = ({id, email, login}: DataType, isAuth: boolean) => (
    {type: SET_USER_DATA, userData: {id, email, login, isAuth}} as const
)

export const loginMe = () => (
    {type: LOGIN_USER, isAuth: true} as const
)

export const authUserTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data, true));
                }
            })
    }
}

export const loginUserTC = (userData: LoginFormDataType) => {
    return (dispatch: Dispatch) => {
        authAPI.login(userData)
            .then(data => {
                if (data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(authUserTC());
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Hmm.. Something is incorrect';
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logoutUserTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(setAuthUserData(null, false));
                }
            })
    }
}