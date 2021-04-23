import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserProfile:(userId:string) => void
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
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);