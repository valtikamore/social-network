import React, {FC} from "react";
import classes from "./ProfileInfo.module.scss"
import {Preloader} from "../../../components/common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userWithoutPhoto from '../../../assets/imagies/icons8-user-male.svg'
import ProfileStatus from "./profileStatus";


const ProfileInfo: FC<ProfilePropsType> = ({profile ,status ,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

        return (
            <div>
                <div className={classes.content}>
                    <img src={profile.photos.small ? profile.photos.small : userWithoutPhoto} alt=""/>

                    <ProfileStatus status={status} updateStatus={updateStatus}/>

                    <div> {profile.fullName} </div>
                    <div> {profile.aboutMe} </div>
                    <ul>
                        <li>{profile.contacts.facebook ? `Facebook: ${profile.contacts.facebook}`:''}</li>
                        <li>{profile.contacts.website}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                        <li>{profile.contacts.youtube}</li>
                        <li>{profile.contacts.github}</li>
                        <li>{profile.contacts.mainLink}</li>
                    </ul>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
            </div>
        )


}
export default ProfileInfo
