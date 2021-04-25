
import { dialogsPage} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';
import { WithAuthRedirect } from "../../Hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage:dialogsPage
    isAuth:boolean
}
type MapDispatchToProps = {
    updateNewMessageBody:() => void
    sendMessage:(body:string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return {
        updateNewMessageBody:()=>{
            dispatch(sendMessageCreator())
        },
        sendMessage: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(WithAuthRedirect(Dialogs))

export default DialogsContainer