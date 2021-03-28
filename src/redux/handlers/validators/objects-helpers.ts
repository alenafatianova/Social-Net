import { UserType } from "../../../types/types";


export const updateObjectInArray = (items: UserType[], itemID: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map((u: any )=> {
        if (u[objPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    })
} 
