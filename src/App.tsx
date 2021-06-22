import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import News from "./pages/News/News";
import Music from './pages/Music/Music';
import Settings from "./pages/Settings/Settings";
import UsersContainer from './pages/users/usersContainer';
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./pages/login/loginPage";
import {Provider, useDispatch} from "react-redux";
import store, { useTypedSelector} from "./redux/redux-store";
import {AppStateType, initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import classes from './App.module.scss'
import {withSuspense} from "./Hoc/Suspense";


const DialogsContainer = React.lazy(() => import('./pages/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./pages/profile/ProfileContainer'))

  const App = () =>  {
        const dispatch = useDispatch()
        const appState = useTypedSelector<AppStateType>((state) => state.app)

        useEffect(() => {
            dispatch(initializeApp())
        },[])
        if (!appState.initialized) {
            return <Preloader/>
        }
        return (
            <div className={classes.App}>
                <HeaderContainer/>
                <div className={classes.AppWrapperContent}>
                    <Navbar/>
                    <Route path='/profile/:userId?'
                           render={() =><React.Suspense fallback={<div>loading</div>}>
                               <ProfileContainer/>
                           </React.Suspense> }/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

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
     const AppSamurai = (props:any) => {
      return  <HashRouter >
          <Provider store={store}>
              <App/>
          </Provider>
      </HashRouter>
    }
export default AppSamurai

