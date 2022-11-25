import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '99363b62-0a0f-4539-9608-321bd1b55171'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    unfollowUser(userId: number) {
        return instance
            .delete(`follow/${userId}`).then(res => res.data)
    },
    followUser(userId: number) {
        return instance
            .post(`follow/${userId}`).then(res => res.data)
    },
    authMe() {
        return  instance
            .get(`auth/me`).then(res => res.data)
    }
}

