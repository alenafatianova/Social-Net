import React from 'react'
import {reduxForm, Field} from 'redux-form'

export const LoginForm = () => {
   return (
    <form>
    <div>
        <Field placeholder='login' component='input' />
    </div>
    <div>
        <Field placeholder='password' component='input' />
    </div>
    <div>
        <Field type='checkbox' component='input' /> remember me
     </div>
    <div>
        <button>login</button>
    </div>
</form>
   )
}

//---------- This is "HOC" for form -------------------------
const LoginReduxForm  = reduxForm({form: 'login'})(LoginForm)
  

export function LoginPage() {
    return (
        <div>
           <div>
               <h1>Login</h1>
                 <LoginReduxForm/>
            </div> 
        </div>
    )
}

