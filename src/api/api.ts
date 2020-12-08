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
        followUser(id: number) {
        return instance.post(`follow/${id}`, {})
    },
    deleteUser(id: number) {
        return instance.delete(`follow/${id}`)
    },
    headerLinks()  {
        return instance.get(`auth/me`)
    }
}





