import {profileReducer} from "./profile_reducer";
import dialogs from "../components/Dialogs/Dialogs";
import {dialogsReducer} from "./dialogs_reducer";
import {sideBarReducer} from "./sidebar_reducer";

type sideBarFriendsType = {
    id: number,
    name: string,
    profilePic: string
}
export type MyPostsType = {
    id: number,
    message: string,
    likesCount: number,
}

export type DialogItemPropsType = {
    id: number,
    name: string,
    profilePic: string
}

export type MessagePropsType = {
    id: number,
    message: string,
    profilePic: string
}

export type ProfilePostsType = {
    postsData: Array<MyPostsType>,
    newPostText: string
}

export type MessagesPageType = {
    dialogsData: Array<DialogItemPropsType>
    messagesData: Array<MessagePropsType>
    newMessageText: string
}
export type SideBarType = {
    friends: Array<sideBarFriendsType>
}

export type stateType = {
    profile: ProfilePostsType
    messages: MessagesPageType
    sidebar: SideBarType
}

export type dispatchMessageType = {
    type: 'ADD-MESSAGE' | 'UPDATE-NEW-MESSAGE-TEXT',
    messageText?: string
}

export type dispatchPostType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT',
    postText?: string
}
export type actionsType = dispatchMessageType | dispatchPostType;


export type stateTypeAndFunctions = {
    _state: stateType,
    dispatch: (action: actionsType) => void,
    store: any
}

export type StoreType = {
    store: stateTypeAndFunctions
}

let store = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 20},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Bye', likesCount: 15},
                {id: 4, message: 'Hi', likesCount: 11},
            ],
            newPostText: ''
        },
        messages: {
            dialogsData: [
                {id: 1, name: 'Moshkara', profilePic: "https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg"},
                {
                    id: 2,
                    name: 'RuPaul',
                    profilePic: 'https://assets.vogue.com/photos/5891b4feb482c0ea0e4da13b/master/pass/holding-rupaul-interview.jpg'
                },
                {
                    id: 3,
                    name: 'Gerard Way',
                    profilePic: 'https://www.musicinminnesota.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-21-at-12.27.04-PM.jpg'
                },
                {
                    id: 4,
                    name: 'Kanye West',
                    profilePic: 'https://pbs.twimg.com/profile_images/1148230318911963136/QO3WaOWg_400x400.jpg'
                },
                {id: 5, name: 'Valera', profilePic: 'https://i.makeup.uk/o/ob/obbu6yuivmdt.jpg'},
            ],
            messagesData: [
                {id: 1, message: 'Hi', profilePic: "https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg"},
                {
                    id: 2,
                    message: 'How are you',
                    profilePic: 'https://assets.vogue.com/photos/5891b4feb482c0ea0e4da13b/master/pass/holding-rupaul-interview.jpg'
                },
                {id: 1, message: 'Bye', profilePic: "https://i.ytimg.com/vi/Zr-qM5Vrd0g/maxresdefault.jpg"},
                {
                    id: 2,
                    message: 'Hi',
                    profilePic: 'https://assets.vogue.com/photos/5891b4feb482c0ea0e4da13b/master/pass/holding-rupaul-interview.jpg'
                },
                {
                    id: 2,
                    message: 'text texttexttexttext text',
                    profilePic: 'https://assets.vogue.com/photos/5891b4feb482c0ea0e4da13b/master/pass/holding-rupaul-interview.jpg'
                },
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Moshkara', profilePic: ''},
                {id: 2, name: 'Valera', profilePic: ''},
                {id: 3, name: 'RuPaul', profilePic: ''},
            ]
        }
    },
    _callSubscriber(_state: stateType) {
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer;
    },


    dispatch(action: actionsType) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = dialogsReducer(this._state.messages, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}





export default store;

