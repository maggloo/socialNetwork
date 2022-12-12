

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




export type SideBarType = {
    friends: Array<sideBarFriendsType>
}


