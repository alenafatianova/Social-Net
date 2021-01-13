import React from 'react'
import style from './ProfileStatus.module.css'

export type statusProps = {
status: string
}

export class ProfileStatus extends React.Component<statusProps> {

    state = {
        editMode: false
    }
    
    activateEditMode()  {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode()  {
        this.setState({
            editMode: false
        })
    }
     render() { 
        return (
        <div className={style.profileStatusWrapper}>
            {!this.state.editMode &&
             <div>
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
            </div>}
           
            {this.state.editMode &&
            <div>
                <input 
                    autoFocus={true}
                    onBlur={this.deactivateEditMode.bind(this)} 
                    value={this.props.status} 
                    placeholder="what are you thinking about?"/>
            </div>}
        </div>
    )
}
}
