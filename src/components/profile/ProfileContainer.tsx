import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {profileUserFromServer, setUsersProfile} from "../../redux/reducers/profile-reducer/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
        profile: state.profilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(withUrlDataContainerComponent)