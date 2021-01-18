import React from 'react'
import { connect } from 'react-redux'
import {reduxForm, Field, InjectedFormProps} from 'redux-form'
import { required } from '../../redux/handlers/validators/validators'
import { Input } from '../common/FormControl/FormControls'
import { login, logout } from '../../redux/auth-reducer'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
   return (
    <form onSubmit={handleSubmit}>
    <div>
        <Field placeholder='login' name='email' component={Input} validate={[required]}  />
    </div>
    <div>
        <Field type='password' placeholder='password'  name='password' component={Input} validate={[required]} />
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
  

function LoginPage(props: any) {
    const onSubmit = (formData: FormDataType) => {
       props.login(formData.email, formData.password, formData.rememberMe)
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

export default connect(null, {login, logout})(LoginPage)
