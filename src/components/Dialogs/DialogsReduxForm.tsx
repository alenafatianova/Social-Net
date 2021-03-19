import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { maxLengthCreator, required } from '../../redux/handlers/validators/validators'
import { Textarea } from '../common/FormControl/FormControls'


export type messageFormType = {
    messageTextarea: string
}

const maxLength100 = maxLengthCreator(100);

export const AddMessageForm: React.FC<InjectedFormProps<messageFormType>> = ({handleSubmit}) => {
   
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <Field 
                type='textarea'
                validate={[required, maxLength100]}
                placeholder='Type your message' 
                name='messageTextarea' 
                component={Textarea} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}


//-------------------- This is HOC for messageReduxForm ----------------------------
export const DialogsReduxForm = reduxForm<messageFormType>({form: 'messageTextarea'})(AddMessageForm)