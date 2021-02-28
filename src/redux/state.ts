import { rerenderEntireTree } from "../render"

export type postType = {
    id:number
    message:string
    likeCount:number
}
export type dialogType = {
    id:number
    name:string
    img:string
}
export type messageType = {
    id:number
    message:string
}
export type friendsType = {
    id:number
    name:string
    img:string
}
export type profilePageType = {
    newPostText:string
    posts : postType[]
}
export type dialogsPage = {
    dialogs:dialogType[]
    messages:messageType[]
}
export type navbarPage = {
    friends:friendsType[]
}

export type stateType = {
    profilePage:profilePageType
    dialogsPage:dialogsPage
    navbarPage: navbarPage
}


 let state:stateType = {
    profilePage : {
        newPostText: '',
        posts: [
            {id:1,message:'Hello bro',likeCount:0},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Valentine",img:'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'},
            {id: 2, name: "Natasha",img:'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'},
            {id: 3, name: "Abrahima",img:'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'},
        ],
        messages: [
            {id: 1, message: 'Hihihihih'},
            {id: 2, message: 'How is your s ds'},
            {id: 3, message: 'Hihihihih'},
        ],
    },
     navbarPage: {
        friends : [
            {id:1,name:'Grisha',img:'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'},
            {id:2,name:'Misha',img:'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'},
            {id:3,name:'Sasha',img:'https://i.pinimg.com/originals/ec/a1/18/eca1187492c9ce5ff3b78bf9b9a6ed9a.jpg'},
        ]
     }
}

export let addPost = () => {
    let newPost:postType = {
        id:5,
        message:state.profilePage.newPostText,
        likeCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export default state