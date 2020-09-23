import React from "react";
import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {PostsType} from './../../redux/state'


const profileInfo = {
  name: 'Alisa',
  surname: 'Johnson',
  age: 27,
  city: 'New York'
}

export type postsDataType = {
  postsData: Array<PostsType>
}

export default function MyPage(props: postsDataType) {
  
  return (
    <div className={classes.mainContent}>
      <ProfileInfo 
      name={profileInfo.name} 
      surname={profileInfo.surname} 
      age={profileInfo.age} 
      city={profileInfo.city}
      />
      <MyPosts postsData={props.postsData}/>
    </div>
  );
}
