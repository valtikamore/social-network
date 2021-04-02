import {AllActionTypes} from "../../redux-store";
export type dialogType = { id: number , name: string ,img: string }
export type messageType = { id: number , message: string  }
export type InitialStateType = typeof initialState
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}as const)
export const updateNewMessageBodyCreator = (body:string) =>  ({type: 'UPDATE_NEW_MESSAGE_BODY', body:body}as const)
let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Valentine",
            img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'
        } ,
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
    ] as dialogType[],
    messages: [
        {id: 1, message: 'Hihihihih'},
        {id: 2, message: 'How is your s ds'},
        {id: 3, message: 'Hihihihih'},
    ] as messageType[],
    newMessageBody:''
}

 export const dialogsReducer = (state:InitialStateType = initialState,action:AllActionTypes):InitialStateType => {
     switch (action.type) {
         case 'UPDATE_NEW_MESSAGE_BODY' :
             return {...state , newMessageBody : action.body}
         case 'SEND_MESSAGE':
             let body = state.newMessageBody
             let newMessage: messageType = {
             id: 6, message: body,
         }
         if(body !== '') {
             return {
                 ...state,
                 newMessageBody: '',
                 messages: [...state.messages,newMessage]
             }
         }
         return state

         default :
             return state
     }
}
export default dialogsReducer