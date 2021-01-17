import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required, minLengthCreator, maxLengthCreator } from '../../../redux/handlers/validators/validators'
import { Textarea } from '../../common/FormControl/FormControls';

type postFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

export const AddPostForm: React.FC<InjectedFormProps<postFormType>> = ({handleSubmit}) => {
    return (
       <form onSubmit={handleSubmit}>
            <div>
            <Field 
                type='textarea'
                name='newPostText'
                component={Textarea}
                validate={[required, maxLength10, minLength2]}
                />
            </div>
            <div>
                <button>Post</button>
            </div>
       </form>
    )
}

//-----------  HOC for the post redux form  ---------------
export const AddPostReduxForm = reduxForm<postFormType>({form: 'postTextarea'})(AddPostForm)