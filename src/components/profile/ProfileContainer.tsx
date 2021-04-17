import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {profileUserFromServer, setUsersProfile} from "../../redux/reducers/profile-reducer/profile-reducer";

type MapStateToPropsType = {
    profile:null | profileUserFromServer
}
type MapDispatchToProps = {
    setUsersProfile:(profile: profileUserFromServer) => void
}
export type profilePropsType = MapStateToPropsType & MapDispatchToProps

 class ProfileContainer extends React.Component<profilePropsType>{
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    this.props.setUsersProfile(response.data)
                })
        }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
       profile : state.profilePage.profile
    }
}
export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)