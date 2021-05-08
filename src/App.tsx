import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route} from 'react-router-dom';
import News from "./pages/News/News";
import Music from './pages/Music/Music';
import Settings from "./pages/Settings/Settings";
import DialogsContainer from "./pages/dialogs/DialogsContainer";
import UsersContainer from './pages/users/usersContainer';
import ProfileContainer from './pages/profile/ProfileContainer';
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./pages/login/loginPage";


const App: React.FC = ()  => {
    return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
