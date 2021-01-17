import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


export type messageFormType = {
    messageTextarea: string
}

export const AddMessageForm: React.FC<InjectedFormProps<messageFormType>> = ({handleSubmit}) => {
   
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <Field 
                type='textarea' 
                placeholder='Type your message' 
                name='messageTextarea' 
                component='textarea'/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}


//-------------------- This is HOC for messageReduxForm ----------------------------
export const DialogsReduxForm = reduxForm<messageFormType>({form: 'messageTextarea'})(AddMessageForm)