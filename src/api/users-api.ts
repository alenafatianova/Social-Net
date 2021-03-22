import { UserType } from "../types/types";
import { apiResponseType, instance } from "./api";

type getUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
export const usersAPI = {
    getUsers(currentPage = 1 , pageSize = 10) {
     return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
     .then(res => res.data)
   },
   followUser(userId: number) {
       return instance.post<apiResponseType>(`follow/${userId}`)
   },
   deleteUser(userId: number) {
       return instance.delete<apiResponseType>(`follow/${userId}`)
   }
}