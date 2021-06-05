import profileReducer, {addPostAC, deletePostAC, ProfileInitialStateType} from "./profile-reducer"

let startValue = {} as ProfileInitialStateType
beforeEach(() => {
    const newPostText = 'blabla'
    startValue = {
        posts: [
            {id: 1, message: 'Hello bro', likeCount: 0},
        ],
        profile: null,
        status:''
    }
})
describe('profile reducer add post',()=> {

    test('add post be defined',()=> {

        const action = addPostAC('dddd')
        const endValue = profileReducer(startValue, action)

        expect(endValue.posts[1]).toBeDefined()
        expect(endValue.posts.length).toBe(2)
        expect(endValue.posts[1].message).toBe('dddd')
    })
    test('add post should be correct ',()=> {

        const action = addPostAC('dddd')
        const endValue = profileReducer(startValue, action)

        expect(endValue.posts[1].message).toBe('dddd')
    })
})
describe('profile reducer delete post',()=> {

    test('after decrement array length should be less',()=> {

        const action = deletePostAC(1)

        const endValue = profileReducer(startValue, action)

        expect(endValue.posts.length).toBe(0)
    })
})