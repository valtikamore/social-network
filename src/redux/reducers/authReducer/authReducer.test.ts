import {authReducer, setAuthUserData} from "./authReducer";


describe('auth reducer', ()=> {
    test('set auth', () => {
        const startValue = {
            id: null ,
            email: null ,
            login: null ,
            isAuth: false
        }
        const action = setAuthUserData(2, 'tatata@mailcom', 'Valtikamore',true)
        const endValue = authReducer(startValue, action)
        expect(endValue.email).toBe('tatata@mailcom')
        expect(endValue.login).toBe('Valtikamore')
        expect(endValue.isAuth).toBeTruthy()
    })

    test('set auth id', () => {
        const startValue = {
            id: null ,
            email: null ,
            login: null ,
            isAuth: false
        }
        const action = setAuthUserData(2, 'tatata@mailcom', 'Valtikamore',true)
        const endValue = authReducer(startValue, action)
        expect(endValue.id).toEqual(2)
    })
})



