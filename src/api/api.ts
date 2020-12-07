import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(baseURL + `users?page=${currentPage} &count=${pageSize}`, {
            withCredentials: true
        })
        .then(response => response.data)
}

export const followUser = (id: number) => {
    return axios.post(baseURL + `follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
            }
        })
        .then(response => response.data)
}

export const deleteUser = (id: number) => {
    return axios.delete(baseURL + `follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
            }
        })
        .then(response => response.data)
}