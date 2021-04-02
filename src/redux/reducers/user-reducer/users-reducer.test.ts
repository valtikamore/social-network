import {followAc, setUsersAc, unFollowAc, usersReducer} from "./users-reducer";

describe('usersReducer follow should be',()=> {
    test('follow user',()=> {
        const startValue = {
            users: [
                {
                    "name": "Shubert",
                    "id": 1,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": false
                },
                {
                    "name": "Hacker",
                    "id": 2,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": false
                }
            ]
        }
        const action = followAc(1)
        const endValue = usersReducer(startValue,action)
        expect(endValue.users[0]).toBeTruthy()
    })
    test('unFollow user',()=> {
        const startValue = {
            users: [
                {
                    "name": "Shubert",
                    "id": 1,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": false
                },
                {
                    "name": "Hacker",
                    "id": 2,
                    "photos": {
                        "small": null,
                        "large": null
                    },
                    "status": null,
                    "followed": true
                }
            ]
        }
        const action = unFollowAc(2)
        const endValue = usersReducer(startValue,action)
        expect(endValue.users[1].followed).toBeFalsy()
    })
    test('set users',()=> {
        const startValue = {
            users: [

            ]
        }
        const startUsers = [
            {
                "name": "Shubert",
                "id": 1,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Hacker",
                "id": 2,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
        const action = setUsersAc(startUsers)
        const endValue = usersReducer(startValue,action)
        expect(endValue.users).toBeDefined()
        expect(endValue.users[0]).toBeDefined()
        expect(endValue.users[0].id).toBe(1)
    })
})