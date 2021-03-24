import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType, setUsersProfile} from "../../redux/profile-reducer";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUsersProfile: (profile: null | ProfileServerType) => void
}

type MapStatePropsType = {
    profile: null | ProfileServerType
}
export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(resp => {
            this.props.setUsersProfile(resp.data)
        })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {
    setUsersProfile
})(ProfileContainer);