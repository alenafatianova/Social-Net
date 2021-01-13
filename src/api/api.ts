import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    deleteUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
   
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    } 
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

export const statusAPI = {
    updateStatus(status: string) {
        return instance.put(`profile/status`, status)
    }
}



