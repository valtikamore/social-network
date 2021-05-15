import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserStatus,
    setUsersProfile, updateUserStatus,
} from "../../redux/reducers/profile-reducer/profile-reducer";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {profileUser} from "../../api/api";
import {WithAuthRedirect} from "../../hoc/authRedirectComponent";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: null | profileUser
    status:string
}
type MapDispatchToProps = {
    setUsersProfile: (userId:number) => void
    getUserStatus: (userId:number) => void
    updateUserStatus: (status:string) => void
}
export type profileContainerPropsType = MapStateToPropsType & MapDispatchToProps

type PathParamsType = {
    userId: string
}
type propsType = profileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<propsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if(!userId) {
            userId = 15876
        }
        this.props.setUsersProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         updateUserStatus={this.props.updateUserStatus}
                         status={this.props.status}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUsersProfile,getUserStatus,updateUserStatus}),
    WithAuthRedirect,
    withRouter,
    WithAuthRedirect
)(ProfileContainer)