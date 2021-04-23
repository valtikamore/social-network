import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {ProfileServerType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {connect} from "react-redux";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchToProps
type MapDispatchToProps = {
    setUserProfile: (userId: string) => void
}
type MapStatePropsType = {
    profile: null | ProfileServerType
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);