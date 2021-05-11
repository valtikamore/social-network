import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Route, withRouter} from 'react-router-dom';
import News from "./pages/News/News";
import Music from './pages/Music/Music';
import Settings from "./pages/Settings/Settings";
import DialogsContainer from "./pages/dialogs/DialogsContainer";
import UsersContainer from './pages/users/usersContainer';
import ProfileContainer from './pages/profile/ProfileContainer';
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./pages/login/loginPage";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootStateType, AppThunk} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";


 const App = () =>  {
        const dispatch = useDispatch()
        const appState = useSelector((state:AppRootStateType) => state.app)
        useEffect(() => {
            dispatch(initializeApp())
        })
        if (!appState.initialized) {
            return <Preloader/>
        }
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
export default App



// class App extends React.Component<any , any> {
//
//     componentDidMount() {
//         this.props.initializeApp()
//     }
//     render() {
//         debugger
//         if (!this.props.initialized) {
//             return <Preloader/>
//         }
//         return (
//
//             <div className="App">
//                 <HeaderContainer/>
//                 <Navbar/>
//                 <div className="App-wrapper-content">
//                     <Route path='/profile/:userId?'
//                            render={() => <ProfileContainer/>}/>
//                     <Route path='/dialogs'
//                            render={() => <DialogsContainer/>}/>
//                     <Route path='/users'
//                            render={() => <UsersContainer/>}/>
//                     <Route path='/login'
//                            render={() => <Login/>}/>
//                     <Route path='/news' component={News}/>
//                     <Route path='/music' component={Music}/>
//                     <Route path='/settings' component={Settings}/>
//                 </div>
//                 <Footer/>
//             </div>
//         );
//     }
// }
//
// type mstpType = {
//     initialized: boolean
// }
// type mdtp = {
//     initializeApp:() => AppThunk
// }
// type appType = mstpType & mdtp
// const mstp = (state: AppRootStateType): mstpType => {
//     return {
//         initialized: state.app.initialized
//     }
// }
// export default
//     connect(mstp, {
//         initializeApp
//     })(App)
//
