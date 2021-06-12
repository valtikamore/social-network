import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss"



const Navbar = () => {
    // let sidebarMap = props.store.getState().navbarPage.friends.map(f => <Friends id={f.id} name={f.name} img={f.img}/>)
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'
                         activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'
                         activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/dialogs'
                         activeClassName={classes.active}> Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'
                         activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'
                         activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'
                         activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div >
                <NavLink to='/friends' className={classes.friendName}>Friends</NavLink>
                <div className={classes.grid}>{/*{sidebarMap}*/} </div>
            </div>
        </nav>
    )
}
export default Navbar
