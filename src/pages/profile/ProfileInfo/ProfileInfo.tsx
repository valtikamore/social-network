import React, { FC} from "react";
import classes from "./ProfileInfo.module.scss"
import {Preloader} from "../../../components/common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userWithoutPhoto from '../../../assets/imagies/icons8-user-male.svg'
import ProfileStatus from "./profileStatus";


const ProfileInfo: FC<ProfilePropsType> = ({profile ,status ,updateStatus,isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelectedOn = (e:any) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
        return (
                <>
                    <div className={classes.avatarBlock}>
                        <img src={profile.photos.large ? profile.photos.large : userWithoutPhoto} alt=""/>

                        {isOwner && <div className={classes.inputWrapper}>
                            <label className={classes.customFileUpload}>
                                <input type="file" onChange={mainPhotoSelectedOn}/>
                                Edit
                            </label>

                        </div>}

                    </div>
                    <div className={classes.aboutBlock}>
                        <div className={classes.userName}> {profile.fullName} </div>
                        <div className={classes.userStatus}>
                            <ProfileStatus status={status} updateStatus={updateStatus}/>
                        </div>

                        <div className={classes.aboutMe}> About me: {profile.aboutMe?profile.aboutMe :'hard-working person' } </div>
                        <ul>
                            <li>Contact information:</li>
                            <li>{profile.contacts.facebook ? `Facebook: ${profile.contacts.facebook}`:''}</li>
                            <li>{profile.contacts.website ? profile.contacts.website : 'web'}</li>
                            <li>{profile.contacts.vk ? profile.contacts.vk : 'vk'}</li>
                            <li>{profile.contacts.twitter ? profile.contacts.twitter : 'twitter'}</li>
                            <li>{profile.contacts.instagram ? profile.contacts.instagram : 'instagram'}</li>
                            <li>{profile.contacts.youtube ? profile.contacts.youtube : 'youtube'}</li>
                            <li>{profile.contacts.github ? profile.contacts.github : 'github'}</li>
                            <li>{profile.contacts.mainLink ? profile.contacts.mainLink : 'mainLink'}</li>
                            <div>{profile.lookingForAJobDescription}</div>
                        </ul>
                    </div>



                </>
        )


}
export default ProfileInfo
