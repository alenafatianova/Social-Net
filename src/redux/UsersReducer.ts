let usersArray = {
    usersData: [
        {id: 1, followed: false, name: 'Ivan Petrov', age: 33, location: {country: 'Russia', city: 'Moscow'}, status: 'Sport, healthy food and lots of workouts!'},
        {id: 2, followed: true, name: 'Nina Nilsen', age: 38, location: {country: 'Demark', city: 'Copenhagen'}, status: 'Follow my dreams, towards to the bright future'},
        {id: 3, followed: true, name: 'George Kozak', age: 26, location: {country: 'Usa', city: 'New York'}, status: 'Art is my passion'},
        {id: 4, followed: true, name: 'Mila Spencer', age: 21, location: {country: 'Usa', city: 'New York'}, status: 'Lawyer university...'},
        {id: 5, followed: false, name: 'Joel Vishkovich', age: 56, location: {country: 'Canada', city: 'Toronto'}, status: 'Looking for a new house'}
    ],
    newMessageForUser: ''
}

const ADD_USERS_IN_FRIENDS = 'ADD-USER-IN-FRIENDS'
const WRITE_MESSAGE = 'WRITE-MESSAGE'
const DELETE_USER = 'DELETE-USER'

export const UsersReducer = (state = usersArray, action: UsersActionType) => {
    switch(action.type) {
        case ADD_USERS_IN_FRIENDS: {
            let stateCopy = {...state}
           
            return stateCopy
        }
        case WRITE_MESSAGE: {
            let stateCopy = {...state}
            return {
                ...stateCopy,
                newMessageForUser: ''
            }
        }
        case DELETE_USER: {
            let stateCopy = {...state}
            return {
                ...stateCopy
            }
        }
        default: 
            return state;
    }
   
    
}

export const userMessageAC = (usersMessage: string) => ({type: WRITE_MESSAGE}) as const
export const deleteUserAC = (id: number, followed: boolean) => ({type: DELETE_USER}) as const
export const addUserAC = (id: number, followed: boolean) => ({type: ADD_USERS_IN_FRIENDS}) as const

export type UsersActionType = ReturnType <typeof userMessageAC> | ReturnType <typeof deleteUserAC> | ReturnType <typeof addUserAC>