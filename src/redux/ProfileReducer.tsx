import React from 'react'
import {newPostType, ProfilePageType } from './store'

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

export const ProfileReducer = (state: ProfilePageType, action:ProfileActionsType) => {

    switch(action.type) {
    case 'ADD_POST': 
    const newPost: newPostType = {
        id: 5,
        post: state.newPostText,
        likes: 0,
    }
        state.postsData.unshift(newPost);
        state.newPostText = "";
        return state
        case 'UPDATE_TEXT': 
        state.newPostText = action.newText;
        return state 
        default:
            return state;
    }
}
export type ProfileActionsType = ReturnType <typeof addPostActionCreator> | ReturnType <typeof changeNewPostCreator> 

export const addPostActionCreator = () => ({type: 'ADD_POST'}) as const;
export const changeNewPostCreator = (newText: string)  => ({type: 'UPDATE_TEXT', newText: newText}) as const