import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserStatus, setUserProfile, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from 'redux';
import {userProfileType} from "../../dal/api";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserProfile: (userId: string) => void
    getUserStatus: (userid: string) => void
    updateUserStatus: (status: string) => void
}
type MapStatePropsType = {
    profile: null | userProfileType
    status: string
}
type PathParamsType = {
    userId: string
}
type propsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<propsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '15876'
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile  {...this.props}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateStatus={this.props.updateUserStatus}
                />
            </div>
        );
    }
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
// 1st wrap - redirect hoc ( custom hoc)
// 2nd wrap - with router hoc
//3rd wrap - connect hoc

export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {
            setUserProfile, updateUserStatus, getUserStatus
        }),
    withRouter,
)(ProfileContainer)