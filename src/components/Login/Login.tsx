import React from 'react'
import {reduxForm} from 'redux-form'

export const LoginForm = () => {
   return (
    <form>
    <div>
        <input placeholder='login'/>
    </div>
    <div>
        <input placeholder='password'/>
    </div>
    <div>
        <input type='checkbox'/> remember me
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

