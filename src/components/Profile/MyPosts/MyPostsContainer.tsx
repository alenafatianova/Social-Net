import React from 'react';
import {addPostActionCreator} from '../../../redux/ProfileReducer'
import {changeNewPostCreator} from '../../../redux/ProfileReducer'
import store from '../../../redux/store'
import MyPosts from './MyPosts'

export default function MyPostsContainer () {
 
  let addNewPost = () => {
    store.dispatch(addPostActionCreator())
  }
  let newPostChange = (newText: string) => {
    let action = changeNewPostCreator(newText)
    store.dispatch(action)
  }
  return <MyPosts 
    postsData={store._state.profilePage.postsData}
    newPostText={store._state.profilePage.newPostText}
    dispatch={store.dispatch}
    store={store}
    addPost={addNewPost}
    updateText={newPostChange} 
  />
}
