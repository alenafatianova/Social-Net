import React from "react";
import classes from "./Profile.module.scss";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {ProfilePageType} from './../../redux/store'
import { ProfileActionsType } from "../../redux/ProfileReducer";

const profileInfo = {
  name: 'Alisa',
  surname: 'Johnson',
  age: 27,
  city: 'New York'
}

// export type postsDataType = {
//   profilePage: ProfilePageType
//   dispatch: (action: ProfileActionsType) => void
// }

export default function Profile () {
  
  return (
    <div className={classes.mainContent}>
      
    <ProfileInfo 
             name={profileInfo.name} 
             surname={profileInfo.surname} 
             age={profileInfo.age} 
             city={profileInfo.city}
    />
    <MyPostsContainer  />
    </div>
  );
}
