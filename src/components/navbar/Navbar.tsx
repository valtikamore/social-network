import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss"

type navbarType = {

}
const Navbar:FC<navbarType> = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.sidebar}>
                <li className={classes.item}>
                    <NavLink to='/profile'
                            activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={`${classes.item} ${classes.active}`}>
                    <NavLink to='/dialogs'
                             activeClassName={classes.active}> Messages</NavLink>
                </li>
                <li className={classes.item}>
                        <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/news'
                             activeClassName={classes.active}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/music'
                             activeClassName={classes.active}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/settings'
                             activeClassName={classes.active}>Settings</NavLink>
                </li>
            </ul>
            <ul className={classes.sidebarFriends}>
                <h3>Friends</h3>
                <li>Lorem ipsum.</li>
                <li>Itaque, neque?</li>
                <li>Ipsa, repellat!</li>
            </ul>
        </nav>
    )
}
export default Navbar