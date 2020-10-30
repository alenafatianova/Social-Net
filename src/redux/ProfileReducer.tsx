import {newPostType} from './store'

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let initialProfileState = {
    newPostText: "",
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ],
  }

export const ProfileReducer = (state = initialProfileState, action:ProfileActionsType) => {
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