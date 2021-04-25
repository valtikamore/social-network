import React from "react";

export type EditableSpanPropsType = {
    status: string
}


export class ProfileStatus extends React.Component<EditableSpanPropsType> {
    state = {
        value: 'Yo',
        editMode: true
    }

    onDoubleClick = () => {
        this.setState({...this.state, editMode: false})
    }
    onBlur = () => {
        this.setState({...this.state, editMode: true})
    }
    onChange = (e: any) => {
        this.setState({...this.state, value: e.currentTarget.value})

    }
    onEnter = (e: any) => {
        if (e.key === 'Enter') {
            this.setState({...this.state, editMode: true, value: e.currentTarget.value})
        }
    }

    render() {

        return (
            <div>
                {this.state.editMode
                    ? <span onDoubleClick={this.onDoubleClick}>{this.state.value}</span>
                    : <input
                        type="text"
                        onBlur={this.onBlur}
                        value={this.state.value}
                        autoFocus
                        onChange={this.onChange}
                        onKeyPress={this.onEnter}/>
                }


            </div>

        )
    }
}

export default ProfileStatus