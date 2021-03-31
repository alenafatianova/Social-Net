import { actions, UsersReducer, InitialUsersState } from '../redux/users-reducer'

let state = InitialUsersState;

beforeEach(() => {
    state = {
        users: [
            {
            id: 1, name: 'Alena', followed: false, age: 23, 
            location: {country: '', city: ''},
            photos: {small: null, large: null}, status: 'status is here'
            },
            {
            id: 2, name: 'Lola', followed: false, age: 28, 
            photos: {small: null, large: null},
            location: {country: '', city: ''},
            status: 'status for lola'
            },
            {
            id: 3, name: 'Gena', followed: true, age: 33, 
            photos: {small: null, large: null},
            location: {country: '', city: ''},
            status: 'status for gena'
            },
            {
            id: 4, name: 'Serghei', followed: true, age: 24, 
            photos: {small: null, large: null},
            location: {country: '', city: ''},
            status: 'status for serghei'
            }
        ] ,
        pageSize: 10,
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as Array<number>  
    }
}) 

test('user is followed', () => {

    const newState = UsersReducer(state, actions.followUser(2))
    
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});

test('user is unfollowed', () => {

    const newState = UsersReducer(state, actions.deleteUser(4))
    
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
})