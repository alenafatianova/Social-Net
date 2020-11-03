import React from 'react';
import {addPostActionCreator, ProfileActionsType} from '../../../redux/ProfileReducer'
import {changeNewPostCreator} from '../../../redux/ProfileReducer'
import { PostsType } from '../../../redux/store'
import MyPosts from './MyPosts'

type MyPostsContainerType = {
  postsData: PostsType[]
  newPostText: string
  dispatch: (action: ProfileActionsType) => void
}
export function MyPostsContainer (props: MyPostsContainerType) {
 
  let addNewPost = () => {
    props.dispatch(addPostActionCreator())
  }
  let newPostChange = (newText: string) => {
    props.dispatch(changeNewPostCreator(newText))
  }

  return <MyPosts 
    postsData={props.postsData}
    newPostText={props.newPostText}
    addPost={addNewPost}
    updateText={newPostChange} 
  />
}
