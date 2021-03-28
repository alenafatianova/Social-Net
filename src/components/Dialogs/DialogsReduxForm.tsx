import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import { maxLengthCreator, required } from '../../redux/handlers/validators/validators'
import { createField, Textarea } from '../common/FormControl/FormControls'
import { NewMessageFormTypes } from './Dialogs'


const maxLength100 = maxLengthCreator(100);
type DialogsReduxFormValuesKeys = Extract<keyof NewMessageFormTypes, string>


export const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormTypes>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
            {createField<DialogsReduxFormValuesKeys>('Type your message', 'newMessageTextBody', Textarea, [required, maxLength100])}
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}


//-------------------- This is HOC for messageReduxForm ----------------------------
export const DialogsReduxForm = reduxForm<NewMessageFormTypes>({form: 'messageTextarea'})(AddMessageForm)