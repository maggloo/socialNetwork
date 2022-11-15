import {SideBarType} from "./store";

let initialState: SideBarType = {
    friends: [
        {id: 1, name: 'Moshkara', profilePic: ''},
        {id: 2, name: 'Valera', profilePic: ''},
        {id: 3, name: 'RuPaul', profilePic: ''},
    ]
}

export const sideBarReducer = (state: SideBarType = initialState, action: any) => {

    return state;
}