import React from "react";
import classes from "./Profile.module.scss";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo";
import {UserProfileType} from '../../redux/ProfileReducer'

type ProfilePropsType = {
  profile: UserProfileType
}

export const Profile = React.memo((props: ProfilePropsType) => {
  
  return (
    
    <div className={classes.mainContent}>
      
    <ProfileInfo profile={props.profile}/>
    
    <MyPostsContainer  />
    </div>
  );
})
