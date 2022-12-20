import {authUserTC} from "./auth_reducer";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxStore";


const SET_INITIALIZED = 'SET_INITIALIZED';


export type AuthReducerType = {
    initialized: boolean
}

let initialState: AuthReducerType = {
    initialized: false
}

export const appReducer = (state: AuthReducerType = initialState, action: actionsType): AuthReducerType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type SetUserDataAT = ReturnType<typeof setInitializedSuccess>;

type actionsType = SetUserDataAT

export const setInitializedSuccess = () => (
    {type: SET_INITIALIZED} as const
)


export const initializeApp = () => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, actionsType>) => {
        let dispatchResult = dispatch(authUserTC())
            .finally(() => {
                dispatch(setInitializedSuccess());
            })

    }
}
