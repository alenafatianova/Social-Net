import React from 'react'
import { useSelector } from 'react-redux'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import {  getFetching} from '../../redux/users-selectors'



export const UsersPage = () => {
    const isFetching = useSelector(getFetching)
    return (
        <div>
            {isFetching ? <Preloader/> : null}
            <Users  />  
        </div> 
    )
}

   

