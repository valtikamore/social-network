import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType, setUsersProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUsersProfile: (profile: null | ProfileServerType) => void
}
type MapStatePropsType = {
    profile: null | ProfileServerType
}
type PathParamsType = {
    userId: string
}
type propsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

export class ProfileContainer extends React.Component<propsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(resp => {
            this.props.setUsersProfile(resp.data)
        })
    }

    render() {
        return (
            <div>
                <Profile  {...this.props}  profile={this.props.profile}/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);