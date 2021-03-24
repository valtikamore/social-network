import React, {FC} from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../Preloader/Preloader";
import {ProfilePropsType} from "../Profile";


const ProfileInfo: FC<ProfilePropsType> = ({profile}) => {
    debugger
    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={classes.content}>
                    <img src={ profile.photos.small} alt=""/>
                    ava + description
                </div>
            </div>
        )
    }

}
export default ProfileInfo