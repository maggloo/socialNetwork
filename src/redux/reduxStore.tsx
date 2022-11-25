import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {sideBarReducer} from "./sidebar_reducer";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth_reducer";

let rootReducer = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export default store;