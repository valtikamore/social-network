import React from 'react';
import './App.css';
import Header from "./conponents/header/Header";
import Navbar from "./conponents/navbar/Navbar";
import Footer from "./conponents/footer/Footer";
import { Route} from 'react-router-dom';
import News from "./conponents/News/News";
import Music from './conponents/Music/Music';
import Settings from "./conponents/Settings/Settings";
import Profile from "./conponents/profile/Profile";
import Dialogs from "./conponents/dialogs/Dialogs";
import {updateNewPostText, stateType} from "./redux/state";
import {addPost} from "./redux/state";

type AppType = {
    state:stateType
    addPost:(postMessage:string) => void
    updateNewPostText:(newText:string) => void
}

const App: React.FC<AppType> = (props)  => {
    return (
            <div className="App">
                <Header/>
                <Navbar state={props.state.navbarPage}/>
                <div className="App-wrapper-content">
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               addPost={addPost}
                               message={props.state.profilePage
                                   .newPostText}
                               updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
