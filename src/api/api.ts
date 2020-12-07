import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(baseURL + `users?page=${currentPage} &count=${pageSize}`)
        .then(response => response.data)
}

export const followUser = (id: number) => {
    return instance.post(baseURL + `follow/${id}`, {})
        .then(response => response.data)
}

export const deleteUser = (id: number) => {
    return axios.delete(baseURL + `follow/${id}`)
        .then(response => response.data)
}