import profileReducer, {addPost, setUsersProfileSuccess, updateNewPostText} from "./profile-reducer"
import {usersReducer} from "../user-reducer/users-reducer";

describe('profile reducer add-post should be ',()=> {
    test('add post be defined',()=> {
        const newPostText = 'blabla'
        const startValue = {
            newPostText: newPostText,
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
            profile: null
        }
        const action = addPost()
        const endValue = profileReducer(startValue, action)
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
            profile: null
        }
        const action = addPost()
        const endValue = profileReducer(startValue, action)

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
            profile: null
        }
        const action = updateNewPostText('newNewPostText')
        const endValue = profileReducer(startValue, action)
        expect(endValue).toBeDefined()
        expect(endValue.newPostText).toBeDefined()
        expect(endValue.posts).toBeDefined()
        expect(endValue.posts[0].id).toBe(1)
        expect(endValue.posts[0].message).toBe('Hello bro')
        expect(endValue.posts[0].likeCount).toBe(0)
        expect(endValue.newPostText).toBe('newNewPostText')

    })
})
describe('profile reducer set users', () => {
    test('set users', () => {
        const startValue = {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
            profile: null
        }
        const userProfile = {
            "contacts": {
                "facebook": "facebook.com",
                "website": null,
                "vk": "vk.com/dimych",
                "twitter": "https://twitter.com/@sdf",
                "instagram": "instagra.com/sds",
                "youtube": null,
                "github": "github.com",
                "mainLink": null
            },
            "lookingForAJob": true,
            "lookingForAJobDescription": "не ищу, а дурачусь",
            "fullName": "samurai dimych",
            "userId": 2,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        }
        const action = setUsersProfileSuccess(userProfile)
        const endValue = profileReducer(startValue,action)
        expect(endValue.profile).toBeDefined()
        expect(endValue.profile?.lookingForAJobDescription).toBe("не ищу, а дурачусь")
    })
})