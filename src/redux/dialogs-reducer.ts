import {AllActionTypes} from "./redux-store";
export enum DIALOGS_ACTIONS_TYPE{
    SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY',
}

export type dialogType = { id: number, name: string, img: string }
export type messageType = { id: number, message: string }
export type DialogsPageStateType = typeof initialState
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
    ] as dialogType[],
    messages: [
        {id: 1, message: 'Hihihihih'},
        {id: 2, message: 'How is your s ds'},
        {id: 3, message: 'Hihihihih'},
    ] as messageType[],
}
const dialogsReducer = (state: DialogsPageStateType = initialState, action: AllActionTypes): DialogsPageStateType => {

    switch (action.type) {
        case DIALOGS_ACTIONS_TYPE.SEND_MESSAGE:
            let newMessage: messageType = {id: 6, message: action.messageText}
            if (action.messageText !== '') {
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            }
            return state

        default :
            return state
    }
}
export const sendMessageCreator = (messageText:string) => ({type: 'SEND_MESSAGE',messageText}as const )

export default dialogsReducer