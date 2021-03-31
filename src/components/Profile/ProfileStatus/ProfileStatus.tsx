import React, { ChangeEvent } from 'react'
import style from '../../../styles/ProfileStatus.module.css'

export type statusProps = {
    status: string
    updateStatus: (status: string) => void
}

export type statusStateProps = {
    editMode: boolean
    status: string
}
export class ProfileStatus extends React.Component<statusProps, statusStateProps> {

    state = {
        editMode: false,
        status: this.props.status,
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

 //--------------      FIX PREV STATE       ------------------------------
    componentDidUpdate(prevProps: statusProps, prevState: statusStateProps) {
          if(prevProps.status !== this.props.status) {
              this.setState({
                  status: this.props.status
              })
          }
    }

     render() { 
        return (
        <div className={style.profileStatusWrapper}>
            {!this.state.editMode &&
             <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>}
           
            {this.state.editMode &&
            <div>
                <input 
                    onChange={this.onChangeStatus}
                    autoFocus={true}
                    onBlur={this.deactivateEditMode.bind(this)} 
                    value={this.state.status} 
                    placeholder="what are you thinking about?"/>
            </div>}
        </div>
    )
}
}
