import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../../redux/handlers/validators/validators'
import { createField, Textarea } from '../../common/FormControl/FormControls';

export type addPostFormType = {
    newPostText: string
}


type PostsFormValuesTypeKeys = Extract<keyof addPostFormType, string>

export const AddPostForm: React.FC<InjectedFormProps<addPostFormType>> = React.memo(({handleSubmit}) => {
    return (
       <form onSubmit={handleSubmit}>
            <div>
            {createField<PostsFormValuesTypeKeys>('Type your post here', 'newPostText', Textarea, [required])}
            </div>
            <div>
                <button>Post</button>
            </div>
       </form>
    )
})

//-----------  HOC for the post redux form  ---------------
export const AddPostReduxForm = reduxForm<addPostFormType>({form: 'postTextarea'})(AddPostForm)