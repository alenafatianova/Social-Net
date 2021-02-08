import { UsersType } from "../../users-reducer";


export const updateObjectInArray = (items: Array<UsersType>, itemID: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map(u => {
        if (u[objPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    })
} 
