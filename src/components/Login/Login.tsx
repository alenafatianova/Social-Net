import React from 'react'
import { connect, useDispatch } from 'react-redux'
import {reduxForm, InjectedFormProps} from 'redux-form'
import { required } from '../../redux/handlers/validators/validators'
import { createField, Input } from '../common/FormControl/FormControls'
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import { StateType } from '../../redux/redux-store'
import style from '../common/FormControl/formControls.module.scss'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean 
}
type formPageProps = {
    login: (email: string, password: string, rememberMe: boolean ) => void
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
   return (
    <form onSubmit={handleSubmit}>
        {createField('Email', 'email', Input, [required])}
        {createField('Password', 'password', Input, [required], {type: 'password'})}
        {createField(undefined, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me' )}
     {error && <div className={style.formErrorEmail}>
            {error}
        </div>
    }
    <div>
        <button>Login</button>
    </div>
</form>
   )
}

//---------- This is "HOC" for form -------------------------
const LoginReduxForm  = reduxForm<FormDataType>({form: 'login'})(LoginForm)
  

const LoginPage = (props: formPageProps) => {
    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
       dispatch(login(formData.email, formData.password, formData.rememberMe))
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
