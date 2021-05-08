import {AllActionsType} from "./redux-store";

export enum DIALOGS_ACTIONS_TYPE{
    SEND_MESSAGE = 'SEND_MESSAGE',
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
            name: "Misha",
            img: 'https://ih1.redbubble.net/image.1005447779.9765/flat,750x1000,075,f.jpg'
        },
    ] as dialogType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your s ds'},
        {id: 3, message: 'Hi'},
    ] as messageType[],
}

export type dialogsActionsType = ReturnType<typeof sendMessageCreator>

export const sendMessageCreator = (messageText:string) => ({type: 'SEND_MESSAGE',messageText}as const )

const dialogsReducer = (state: DialogsPageStateType = initialState, action: AllActionsType): DialogsPageStateType => {

    switch (action.type) {
        case DIALOGS_ACTIONS_TYPE.SEND_MESSAGE: {
            let newMessage: messageType = {id: 6, message: action.messageText}
            if (action.messageText !== '') {
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            }
            return state
        }
        default :
            return state
    }
}


export default dialogsReducer