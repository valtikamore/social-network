import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from 'redux';
import {userProfileType} from "../../dal/api";
import {getUserStatus, savePhoto, setUserProfile, updateUserStatus} from "../../redux/profile-reducer/profile-reducer";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserProfile: (userId: number) => void
    getUserStatus: (userid: number) => void
    updateUserStatus: (status: string) => void
    savePhoto:(file:any) => void
}
type MapStatePropsType = {
    profile: null | userProfileType
    status: string
    authorizedUserId:number | null
    isAuth:boolean
    userId:number | null
}
type PathParamsType = {
    userId: string
}
type propsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<propsType> {
    refreshProfile () {
        let userId:number|null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.userId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        if(userId) {
            this.props.setUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <>
                <Profile  {...this.props}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateStatus={this.props.updateUserStatus}
                          isOwner={!this.props.match.params.userId}
                          savePhoto={this.props.savePhoto}
                />
            </>
        );
    }
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth,
    userId:state.auth.userId
})
// 1st wrap - redirect hoc ( custom hoc)
// 2nd wrap - with router hoc
//3rd wrap - connect hoc

export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {
            setUserProfile, updateUserStatus, getUserStatus , savePhoto
        }),
    withRouter,
)(ProfileContainer)
