import { UsersType } from "../../users-reducer";


export const updateObjectInArray = (items: UsersType[], itemID: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map((u: any )=> {
        if (u[objPropName] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    })
} 
