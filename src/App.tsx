import React from 'react';
import './App.css';
import Header from "./conponents/header/Header";
import Navbar from "./conponents/navbar/Navbar";
import Footer from "./conponents/footer/Footer";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./conponents/News/News";
import Music from './conponents/Music/Music';
import Settings from "./conponents/Settings/Settings";
import Profile from "./conponents/profile/Profile";
import Dialogs from "./conponents/dialogs/Dialogs";
import { dialogType, messageType, postType} from "./index";

export type AppPropsType = {
    postsData: postType[]
    dialogsData: dialogType[]
    messagesData: messageType[]
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={() => <Profile  postsData={props.postsData}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
