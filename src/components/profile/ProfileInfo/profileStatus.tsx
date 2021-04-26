import React from "react";

export type EditableSpanPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<EditableSpanPropsType> {
    state = {
        status: this.props.status,
        editMode: true
    }

    onDoubleClick = () => {
        this.setState({...this.state, editMode: false})
    }
    onBlur = (e: any) => {
        this.setState({...this.state, editMode: true})
        this.props.updateStatus(e.currentTarget.value)
    }
    onChange = (e: any) => {
        this.setState({...this.state, status: e.currentTarget.value})

    }
    onEnter = (e: any) => {
        if (e.key === 'Enter') {
            this.setState({...this.state, editMode: true, value: e.currentTarget.value})
            this.props.updateStatus(e.currentTarget.value)
        }
    }

    render() {

        return (
            <div>
                {this.state.editMode
                    ? <span
                        onDoubleClick={this.onDoubleClick}
                        onTouchStart={this.onDoubleClick}>{!this.props.status ? 'hey' : this.props.status}</span>
                    : <input
                        type="text"
                        onBlur={this.onBlur}
                        value={this.state.status}
                        autoFocus
                        onChange={this.onChange}
                        onKeyPress={this.onEnter}
                    />
                }


            </div>

        )
    }

}

export default ProfileStatus