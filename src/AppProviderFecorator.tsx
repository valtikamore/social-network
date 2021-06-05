import {Provider} from "react-redux";
import React from 'react'
import {combineReducers, createStore} from "redux";

import dialogsReducer from "./redux/dialogs-reducer";
import usersReducer from "./redux/users-reducer";
import {authReducer} from "./redux/auth-reducer";
import {AppRootStateType} from "./redux/redux-store";
import profileReducer from "./redux/profile-reducer/profile-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const initialGlobalState = {};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)