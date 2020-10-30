import React from "react";
import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ProfileActionsType} from '../../redux/ProfileReducer'
import {PostsType} from './../../redux/store'

const profileInfo = {
  name: 'Alisa',
  surname: 'Johnson',
  age: 27,
  city: 'New York'
}

export type postsDataType = {
  postsData: Array<PostsType>
  newPostText: string
  dispatch: (action: ProfileActionsType) => void
  
}

export default function Profile(props: postsDataType) {
  return (
    <div className={classes.mainContent}>
      
      <ProfileInfo 
      name={profileInfo.name} 
      surname={profileInfo.surname} 
      age={profileInfo.age} 
      city={profileInfo.city}
      />
     
      <MyPosts 
      
      postsData={props.postsData} 
      newPostText={props.newPostText}
      dispatch={props.dispatch}
      />
    </div>
  );
}
