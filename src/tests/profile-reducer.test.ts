import { ProfileReducer, addPostActionCreator } from './../redux/profile-reducer';



it('new post should be added', () => {
    // 1. test data
let action = addPostActionCreator("newPostText")
let initialProfileState = {
    postsData: [
      { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
      { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
      { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
    ],
    profile: null,
    status: '',
}
    // 2. new action
    let newState = ProfileReducer(initialProfileState, action)

    // 3. expectation 
    expect(newState.postsData.length).toBe(4);
})