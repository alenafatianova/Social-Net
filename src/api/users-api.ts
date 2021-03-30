import { UserType } from "../types/types";
import { apiResponseType, instance } from "./api";

type getUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
export const usersAPI = {
    getUsers(currentPage = 1 , pageSize = 10, term = '') {
     return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`).then(res => res.data)
   },
   async followUser(userId: number) {
       debugger
       const res = await instance.post<apiResponseType>(`follow/${userId}`);
       return res.data; 
   },
   deleteUser(userId: number) {
       return instance.delete<apiResponseType>(`follow/${userId}`).then(res => res.data)
   }
}