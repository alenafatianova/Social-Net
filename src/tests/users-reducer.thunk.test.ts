import { actions, follow, unfollowUser } from "../redux/users-reducer"
import { usersAPI } from '../api/users-api';
import { apiResponseType, ResultCodeEnum } from "../api/api";
jest.mock('../api/users-api')

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: apiResponseType = {
    resultCode: ResultCodeEnum.success,
    messages: [],
    data: {},
}

usersAPIMock.followUser.mockReturnValue(Promise.resolve(result))
usersAPIMock.deleteUser.mockReturnValue(Promise.resolve(result))

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    usersAPIMock.followUser.mockClear();
    usersAPIMock.deleteUser.mockClear();
})

test('success follow thunk', async () => {
    const thunk = follow(1)
    
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followUser(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingInProgress(false, 1))
})

test('success unfollow thunk', async () => {
    const thunk = unfollowUser(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.deleteUser(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingInProgress(false, 1))
})