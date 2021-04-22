import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {profileUserFromServer, setUsersProfile} from "../../redux/reducers/profile-reducer/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: null | profileUserFromServer
}
type MapDispatchToProps = {
    setUsersProfile: (profile: profileUserFromServer) => void
}
export type profileContainerPropsType = MapStateToPropsType & MapDispatchToProps
type PathParamsType = {
    userId: string
}
type propsType = profileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<propsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '15876'
        }
       usersAPI.getProfileUser(userId)
            .then(data => {
                this.props.setUsersProfile(data)
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
        profile: state.profilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(withUrlDataContainerComponent)