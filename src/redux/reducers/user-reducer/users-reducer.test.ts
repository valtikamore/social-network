import {
    followSuccess, toggleFollowing,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollowSuccess,
    usersReducer
} from "./users-reducer";

describe('usersReducer  should be', () => {
    test('follow user', () => {
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
            ],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
        }
        const action = followSuccess(1)
        const endValue = usersReducer(startValue, action)
        expect(endValue.users[0]).toBeTruthy()
    })
    test('unFollow user', () => {
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
            ],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
        }
        const action = unFollowSuccess(2)
        const endValue = usersReducer(startValue, action)
        expect(endValue.users[1].followed).toBeFalsy()
    })
    test('set users', () => {
        const startValue = {
            users: [],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
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


        const action = setUsers(startUsers)
        const endValue = usersReducer(startValue, action)
        expect(endValue.users).toBeDefined()
        expect(endValue.users[0]).toBeDefined()
        expect(endValue.users[0].id).toBe(1)
    })
    test('set current page', () => {
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
            ],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
        }
        const action = setCurrentPage(3)
        const endValue = usersReducer(startValue, action)
        expect(endValue.currentPage).toBe(3)
    })
    test('set total users count', () => {
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
            ],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
        }
        const action = setTotalUsersCount(100)
        const endValue = usersReducer(startValue, action)
        expect(endValue.totalUsersCount).toBe(100)
    })
    test('toggle is fetching', () => {
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
            ],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
        }
        const action = toggleIsFetching(true)
        const endValue = usersReducer(startValue, action)
        expect(endValue.isFetching).toBeTruthy()
    })
    test('following in progres', () => {
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
            ],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false,
            followingInProgress:[]
        }
        const action1 = toggleFollowing(1,true)
        const action2 = toggleFollowing(2,false)
        const endValue1 = usersReducer(startValue, action1)
        const endValue2 = usersReducer(startValue, action1)
        expect(endValue1.followingInProgress[0]).toBe(1)
        expect(endValue2.followingInProgress[0]).toBe(1)
    })
})