import React from "react";
import classes from "./Profile.module.scss";
import MyPostsContainer from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import store, {PostsType, StoreType} from './../../redux/store'
import { ProfileActionsType } from "../../redux/ProfileReducer";


const profileInfo = {
  name: 'Alisa',
  surname: 'Johnson',
  age: 27,
  city: 'New York'
}

export type postsDataType = {
  updateText: (newText: string) => void
  addPost: () => void
}

export default function Profile (props: postsDataType) {
  return (
    <div className={classes.mainContent}>
      
    <ProfileInfo 
             name={profileInfo.name} 
             surname={profileInfo.surname} 
             age={profileInfo.age} 
             city={profileInfo.city}
    />
    <MyPostsContainer 
          newPostText={store._state.profilePage.newPostText}
          postsData={store._state.profilePage.postsData} 
          dispatch={store.dispatch}
          store={store}
          updateText={props.updateText}
          addPost={props.addPost} />
    </div>
  );
}
