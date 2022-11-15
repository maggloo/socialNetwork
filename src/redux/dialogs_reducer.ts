import {MessagePropsType, MessagesPageType} from "./store";
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState: MessagesPageType = {
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
    }

export const dialogsReducer = (state: MessagesPageType = initialState, action: actionsType): MessagesPageType  => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessagePropsType = {
                id: 2,
                message: state.newMessageText,
                profilePic: 'https://assets.vogue.com/photos/5891b4feb482c0ea0e4da13b/master/pass/holding-rupaul-interview.jpg'
            };
            return {...state, newMessageText: '', messagesData: [...state.messagesData, newMessage]};
        case UPDATE_NEW_MESSAGE_TEXT:

            return {...state, newMessageText: action.messageText ? action.messageText : ''};
        default:
            return state;
    }
}

type addMessageAT = ReturnType<typeof addMessage>;
type updateNewMessageTextAT = ReturnType<typeof updateMessageText>;

export type actionsType = addMessageAT | updateNewMessageTextAT

export const addMessage = () => ({type: ADD_MESSAGE} as const);
export const updateMessageText = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text} as const)