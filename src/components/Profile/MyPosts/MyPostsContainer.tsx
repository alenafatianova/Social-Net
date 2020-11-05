import React from 'react';
import {addPostActionCreator} from '../../../redux/ProfileReducer'
import {changeNewPostCreator} from '../../../redux/ProfileReducer'
import { ActionsType, PostsType, RootStateType } from '../../../redux/store'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

 
type mapStateToPropsType = {
  postsData: PostsType[]
  newPostText: string
}
type mapDispatchToPropsType = {
  addPost: () => void
  updateText: (newText: string) => void
}
let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: (actions: ActionsType) => void): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateText: (newText: string) => {
      dispatch(changeNewPostCreator(newText))
}
  } 
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)