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
import  {dispatchActionType, stateType, storeType} from "./redux/store";
import store from './redux/redux-store'
import DialogsCountainer from "./conponents/dialogs/DialogsCountainer";


type AppType = {
    store:storeType
}

const App: React.FC<AppType> = (props)  => {
    return (
            <div className="App">
                <Header/>
                <Navbar store={props.store}/>
                <div className="App-wrapper-content">
                    <Route path='/profile'
                           render={() => <Profile
                              store={props.store}
                               />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsCountainer
                              store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
