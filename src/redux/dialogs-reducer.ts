import {dialogsPage, dispatchActionTypes, messageType} from "./store";



export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
export const updateNewMessageBodyCreator = (body:string) => {

    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body:body
    } as const
}
let initialState = {
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
    newMessageBody:''
}
 const dialogsReducer = (state:dialogsPage = initialState,action:dispatchActionTypes) => {
     switch (action.type) {
         case 'UPDATE_NEW_MESSAGE_BODY' :
             state.newMessageBody = action.body
             return state
         case 'SEND_MESSAGE':
             let body = state.newMessageBody
             if (body !== '') {
                 state.newMessageBody = ''
                 let newMessage: messageType = {
                     id: 6, message: body,
                 }
                 state.messages.push(newMessage)
             }
             return state
         default :
             return state
     }
}
export default dialogsReducer