import { UserProfileType } from '../types/types';
import { ProfileReducer, ProfileActions } from './../redux/profile-reducer';

let initialProfileState = {
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ],
    profile: null as UserProfileType | null,
    status: '', 
    newPostText: '',
}

it('new post should be added', () => {
    // 1. test data
    let action = ProfileActions.addPostActionCreator("newPostText")

    // 2. new action
    let newState = ProfileReducer(initialProfileState, action)

    // 3. expectation 
    expect(newState.postsData.length).toBe(4);  
});

it('new post text should be "newPostText"', () => {
    let action = ProfileActions.addPostActionCreator("newPostText")

    let newState = ProfileReducer(initialProfileState, action)

    expect(newState.postsData[3].post).toBe("newPostText")
});

it('after deleting amount of posts should be decremented', () => {
    let action = ProfileActions.deletePost(1)
    
    let newState = ProfileReducer(initialProfileState, action)
    
    expect(newState.postsData.length).toBe(2)
});

it('after deleting length should not be decremented', () => {
    let action = ProfileActions.deletePost(1000)
    
    let newState = ProfileReducer(initialProfileState, action)
    
    expect(newState.postsData.length).toBe(3) 
})
