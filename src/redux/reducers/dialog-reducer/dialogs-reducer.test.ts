import dialogsReducer, {dialogType, messageType, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";


describe('dialog reducer should be',()=> {
    test('update newMessageBody',()=> {
        const startValue = {
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
        const body = 'blablabla'
        const action = updateNewMessageBodyCreator(body)
        const endValue = dialogsReducer(startValue,action)
        expect(endValue.newMessageBody).toBe(body)
})
    test('send(add) message',() => {
        const startValue = {
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
            newMessageBody:'blabla'
        }
        const endValue = dialogsReducer(startValue,sendMessageCreator())

        expect(endValue.messages.length).toBe(4)
        expect(endValue.messages[3].message).toBe('blabla')
        expect(endValue.messages[3].id).toBe(6)
    })
})