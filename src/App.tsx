import React from 'react';
import classes from './App.module.scss';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";


import DialogsContainer from "./components/dialogs/DialogsContainer";

import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";




const App: React.FC = () => {
    return (
        <div className={classes.App}>
            <HeaderContainer/>
            <Navbar/>
            <div className={classes.AppWrapperContent}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
