import React from "react";
import classes from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";



const profileInfo = {
  name: 'Alisa',
  surname: 'Johnson',
  age: 27,
  city: 'New York'
}
export type PostType = {
  id: number
  post: string
  likes: number
  postsData: Array<PostType>
}


export default function MyPage(props: PostType) {
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
