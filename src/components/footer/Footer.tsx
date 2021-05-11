import React from "react";
import classes from "./Footer.module.scss"
const Footer = ()=> {
    return (
        <footer className={classes.footer}>
            <ul className={classes.footerList}>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Contact Us</li>
            </ul>
        </footer>
    )
}
export default Footer