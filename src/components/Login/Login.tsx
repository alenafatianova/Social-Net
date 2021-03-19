import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { required } from '../../redux/handlers/validators/validators'
import { createField, Input } from '../common/FormControl/FormControls'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router'
import { StateType } from '../../redux/redux-store'
import style from '../../styles/formControls.module.scss'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean 
    captcha: string 
}

type captchaProps = {
    captcha: string | null
}
const LoginForm: React.FC<InjectedFormProps<FormDataType, captchaProps> & captchaProps> = ({handleSubmit, error, captcha}) => {
   return (
    <form onSubmit={handleSubmit}>
        {createField<LoginFormValuesTypeKeys>('Email', 'email', Input, [required])}
        {createField<LoginFormValuesTypeKeys>('Password', 'password', Input, [required], {type: 'password'})}
        {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me' )}
     {error && <div className={style.formErrorEmail}>
            {error}
        </div>
    }
    {captcha && <img src={captcha} alt='captchaImage'/>}
    {captcha && createField('Symbols from image', 'captcha', Input, [required])}
    <div>
        <button>Login</button>
    </div>
</form>
   )
}

//---------- This is "HOC" for form -------------------------
const LoginReduxForm  = reduxForm<FormDataType, captchaProps>({form: 'login'})(LoginForm)
type LoginFormValuesTypeKeys = Extract<keyof FormDataType, string>


export const LoginPage: React.FC = () => {
  const captcha = useSelector((state: StateType) => state.auth.captchaURL)
  const isAuth = useSelector((state: StateType) => state.auth.isAuth)
  const dispatch = useDispatch()
    
  const onSubmit = (formData: FormDataType) => {
      dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    
    if(isAuth) {
        return <Redirect to='/profile'/> 
    }

    return (
        <div>
           <div>
               <h1>Login</h1>
                 <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
            </div> 
        </div>
    )
}

