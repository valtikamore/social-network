
// let state: stateType = {
//     profilePage: {
//         newPostText: '',
//         posts: [
//             {id: 1, message: 'Hello bro', likeCount: 0},
//         ],
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Valentine", img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'},
//             {id: 2, name: "Natasha", img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'},
//             {id: 3, name: "Abrahima", img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'},
//         ],
//         messages: [
//             {id: 1, message: 'Hihihihih'},
//             {id: 2, message: 'How is your s ds'},
//             {id: 3, message: 'Hihihihih'},
//         ],
//     },
//     navbarPage: {
//         friends: [
//             {
//                 id: 1,
//                 name: 'Grisha',
//                 img: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'
//             },
//             {id: 2, name: 'Misha', img: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'},
//             {id: 3, name: 'Sasha', img: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'},
//         ]
//     }
// }
// export const addPost = () => {
//     let newPost: postType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }
// export const subscribe = (observer: (state: stateType) => void) => {
//     rerenderEntireTree = observer
// }
// export default state

export type postType = {
    id: number
    message: string
    likeCount: number
}
export type dialogType = {
    id: number
    name: string
    img: string
}
export type messageType = {
    id: number
    message: string
}
export type friendsType = {
    id: number
    name: string
    img: string
}
export type profilePageType = {
    newPostText: string
    posts: postType[]
}
export type dialogsPage = {
    dialogs: dialogType[]
    messages: messageType[]
}
export type navbarPage = {
    friends: friendsType[]
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPage
    navbarPage: navbarPage
}

export type storeType = {
    _state:stateType
    _callSubscriber:(_state:stateType)=>void
    getState:() => stateType
    addPost:() => void
    updateNewPostText:(newText:string) => void
    subscribe:(observer: (state: stateType) => void) => void
}

export let store :storeType= {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Valentine",
                    img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'
                },
                {
                    id: 2,
                    name: "Natasha",
                    img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'
                },
                {
                    id: 3,
                    name: "Abrahima",
                    img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hihihihih'},
                {id: 2, message: 'How is your s ds'},
                {id: 3, message: 'Hihihihih'},
            ],
        },
        navbarPage: {
            friends: [
                {
                    id: 1,
                    name: 'Grisha',
                    img: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'
                },
                {
                    id: 2,
                    name: 'Misha',
                    img: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    img: 'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'
                },
            ]
        },
    },
     _callSubscriber : (_state:stateType) => {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost: postType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer)  {
        this._callSubscriber = observer
    }

}
export default store