import React from 'react'
import { connect } from 'react-redux'
import {reduxForm, Field, InjectedFormProps} from 'redux-form'
import { required } from '../../redux/handlers/validators/validators'
import { Input } from '../common/FormControl/FormControls'
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import { StateType } from '../../redux/redux-store'
import style from '../common/FormControl/formControls.module.scss'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean 
    error: string
}
type formPageProps = {
    login: (email: string, password: string, rememberMe: boolean ) => void
    isAuth: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
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
     {error && <div className={style.formErrorEmail}>
            {error}
        </div>
    }
    <div>
        <button>login</button>
    </div>
</form>
   )
}

//---------- This is "HOC" for form -------------------------
const LoginReduxForm  = reduxForm<FormDataType>({form: 'login'})(LoginForm)
  

function LoginPage(props: formPageProps) {
    const onSubmit = (formData: FormDataType) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to='/profile'/>
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
const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout})(LoginPage)
