import React from 'react'


type profileInfoPropsType = {
    name: string
    surname: string
    age: number
    city: string
}

export default function ProfileInfo(props: profileInfoPropsType) {
    return (
        <div>
             <div>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5W2tli7-nT4GT1zqSkZziPAeOoHuZUwljrQ&usqp=CAU' alt="user-avatar"/>
               <div><span>{props.name}</span></div>
               <div><span>{props.surname}</span></div>
               <div><span>{props.age}</span></div>
               <div><span>{props.city}</span></div>
            </div>
        </div>
    )
}
