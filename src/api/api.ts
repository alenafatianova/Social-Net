import axios from 'axios'


export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
    &count=${pageSize}`, {
            withCredentials: true
        })
        .then(response => response.data)
}

export const followUser = (id: number) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
            }
        })
        .then(response => response.data)
}

export const deleteUser = (id: number) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'd6da0b4d-b16d-42bc-a142-317d3b9eca82'
            }
        })
        .then(response => response.data)
}