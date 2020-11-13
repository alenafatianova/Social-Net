import React from 'react'

type UsersPropsType = {
    users: UsersType[]
}
type UsersType = {
    id: number
    name: string
    country: string
    city: string
    age: number
    status: string
}

export default function Users(props: UsersPropsType) {
    return (
        <div>
            
        </div>
    )
}
