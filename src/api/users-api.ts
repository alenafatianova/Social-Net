import { UserType } from "../types/types";
import { apiResponseType, instance } from "./api";

type getUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
export const usersAPI = {
    getUsers(currentPage = 1 , pageSize = 10, term = '', friend: null | boolean = null) {
     return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + 
        (friend === null ? '' : `&friend=${friend}`)).then(res => res.data)
   },
    follow(userId: number) {
       return instance.post<apiResponseType>(`follow/${userId}`).then(res => res.data) 
   },
   unfollow(userId: number) {
       return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<apiResponseType>
   }
}