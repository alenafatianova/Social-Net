import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type postFormType = {
    newPostText: string
}

export const AddPostForm: React.FC<InjectedFormProps<postFormType>> = ({handleSubmit}) => {
    return (
       <form onSubmit={handleSubmit}>
            <div>
            <Field 
                type='textarea'
                name='newPostText'
                component='textarea'
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