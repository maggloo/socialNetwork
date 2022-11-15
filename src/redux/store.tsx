

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


export type MessagesPageType = {
    dialogsData: Array<DialogItemPropsType>
    messagesData: Array<MessagePropsType>
    newMessageText: string
}
export type SideBarType = {
    friends: Array<sideBarFriendsType>
}


