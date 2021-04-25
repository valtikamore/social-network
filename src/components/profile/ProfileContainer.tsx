import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType, setUserProfile} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import { WithAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserProfile: (userId: string) => void
}
type MapStatePropsType = {
    profile: null | ProfileServerType
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
    }

    render() {
        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})
// 1st wrap - redirect hoc ( custom hoc)
// 2nd wrap - with router hoc
//3rd wrap - connect hoc

export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {
            setUserProfile
        }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)