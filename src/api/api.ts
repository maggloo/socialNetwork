import axios from "axios";
import {LoginFormDataType} from "../components/Login/Login";


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
    setUserProfile(userId: string) {
        console.warn('Obsolete method. Please use profile API object.')
        return profileAPI.setUserProfile(userId)
    }
}

export const profileAPI = {
    setUserProfile(userId: string) {
        return instance
            .get(`profile/` + userId).then(res => res.data);
    },
    getStatus(userId: string) {
        return instance
            .get(`profile/status/` + userId).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, {status});
    }
}

export const  authAPI = {
    me(){
        return instance.get(`auth/me`).then(res => res.data);
    },
    login(userData: LoginFormDataType){
        return instance.post(`auth/login`, userData).then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(res => res.data);
    }
}