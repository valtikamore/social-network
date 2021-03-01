import {dialogsPage, dispatchActionType, messageType, postType, profilePageType, stateType} from "./state";
import ProfileReducer from "./profile-reducer";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body:string) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body:body
    }
}

 const dialogsReducer = (state:dialogsPage,action:dispatchActionType) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY :
             state.newMessageBody = action.body
             return state
         case SEND_MESSAGE:
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