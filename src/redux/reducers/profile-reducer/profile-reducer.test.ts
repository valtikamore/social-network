import profileReducer, { addPostActionCreator, updateNewPostTextActionCreator } from "./profile-reducer"

describe('profile reducer add-post should be ',()=> {
    test('add post be defined',()=> {
        const newPostText = 'blabla'
        const startValue = {
            newPostText: newPostText,
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
        }
        const action = addPostActionCreator()
        const endValue = profileReducer(startValue,action)
        expect(endValue.posts[1]).toBeDefined()
        expect(endValue.posts[1].id).toBe(5)


    })
    test('add post be undefined',()=> {
        const emptyNewPostText = ''
        const startValue = {
            newPostText: emptyNewPostText,
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
        }
        const action = addPostActionCreator()
        const endValue = profileReducer(startValue,action)

        expect(endValue.posts[1]).toBeUndefined()
    })
})
describe('profile reducer update new post should be',()=> {
    test('updated',()=> {
        const startValue = {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
        }
        const action = updateNewPostTextActionCreator('newNewPostText')
        const endValue = profileReducer(startValue,action)
        expect(endValue).toBeDefined()
        expect(endValue.newPostText).toBeDefined()
        expect(endValue.posts).toBeDefined()
        expect(endValue.posts[0].id).toBe(1)
        expect(endValue.posts[0].message).toBe('Hello bro')
        expect(endValue.posts[0].likeCount).toBe(0)
        expect(endValue.newPostText).toBe('newNewPostText')

    })
})