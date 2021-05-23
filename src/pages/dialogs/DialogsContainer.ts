import {DialogsPageStateType, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from "../../Hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageStateType
}
type MapDispatchToProps = {
    sendMessage: (messageText:string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (messageText:string) => {
            dispatch(sendMessageCreator(messageText))
        },
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)