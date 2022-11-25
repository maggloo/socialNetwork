
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const IS_FOLLOWING_PROGRESS = 'IS_FOLLOWING_PROGRESS';


export type initialStateUsersPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching?: boolean,
    followingInProgress: Array<number>
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
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: initialStateUsersPageType = initialState, action: actionsTypes): initialStateUsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

type followAT = ReturnType<typeof follow>;
type unfollowAT = ReturnType<typeof unfollow>;
type setUsersAT = ReturnType<typeof setUsers>;
type setCurrentPageAT = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>;
type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>;
type followingInProgressAT = ReturnType<typeof toggleFollowingProgress>;

export type actionsTypes =
    followAT | unfollowAT | setUsersAT
    | setCurrentPageAT | setTotalUsersCountAT | toggleIsFetchingAT
    | followingInProgressAT;


export const follow = (userID: number) => ({type: FOLLOW, userID} as const);
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (usersCount: number) => ({type: SET_TOTAL_USERS_COUNT, usersCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({type: IS_FOLLOWING_PROGRESS, followingInProgress, userId} as const);
