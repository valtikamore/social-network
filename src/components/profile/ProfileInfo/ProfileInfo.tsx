import React, {FC} from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userWithoutPhoto from '../../../assets/imagies/icons8-user-male.svg'


const ProfileInfo: FC<ProfilePropsType> = ({profile}) => {
    debugger
    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={classes.content}>
                    <img src={ profile.photos.small ? profile.photos.small : userWithoutPhoto} alt=""/>
                    <div> {profile.fullName} </div>
                </div>
            </div>
        )
    }

}
export default ProfileInfo