import React from 'react'
import {reduxForm, Field, InjectedFormProps} from 'redux-form'
import { required } from '../../redux/handlers/validators/validators'
import { Input } from '../common/FormControl/FormControls'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
   return (
    <form onSubmit={handleSubmit}>
    <div>
        <Field placeholder='login' name='login' component={Input} validate={[required]}  />
    </div>
    <div>
        <Field placeholder='password'  name='password' component={Input} validate={[required]} />
    </div>
    <div>
        <Field type='checkbox'  name='rememberMe' component='input' /> remember me
     </div>
    <div>
        <button>login</button>
    </div>
</form>
   )
}

//---------- This is "HOC" for form -------------------------
const LoginReduxForm  = reduxForm<FormDataType>({form: 'login'})(LoginForm)
  

export function LoginPage() {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
           <div>
               <h1>Login</h1>
                 <LoginReduxForm onSubmit={onSubmit} />
            </div> 
        </div>
    )
}

