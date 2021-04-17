import {
    followAc,
    setCurrentPageAc,
    setTotalUsersCountAc,
    setUsersAc,
    toggleIsFetchingAc,
    unFollowAc,
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
            isFetching: false
        }
        const action = followAc(1)
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
            isFetching: false
        }
        const action = unFollowAc(2)
        const endValue = usersReducer(startValue, action)
        expect(endValue.users[1].followed).toBeFalsy()
    })
    test('set users', () => {
        const startValue = {
            users: [],
            pageSize: 10,
            totalUsersCount: 100,
            currentPage: 2,
            isFetching: false
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
            isFetching: false
        }
        const action = setCurrentPageAc(3)
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
            isFetching: false
        }
        const action = setTotalUsersCountAc(100)
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
            isFetching: false
        }
        const action = toggleIsFetchingAc(true)
        const endValue = usersReducer(startValue, action)
        expect(endValue.isFetching).toBeTruthy()
    })
})