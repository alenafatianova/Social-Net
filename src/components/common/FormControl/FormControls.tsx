import React from 'react'
import { Field } from 'redux-form'
import style from './formControls.module.scss'

type validationProps = {
    input: any
    meta: {
        touched: boolean
        error: boolean
        warning: string
    }
    element: any
}
export const createField = ( placeholder: string, name: string, component: {}, validate: string, props = {}, text = "") => {
    <div>
        <Field 
            placeholder={placeholder} 
            name={name} 
            component={component} 
            validate={validate}
            {...props}  
            /> {text}
    </div>
}
const element = <div><textarea/></div>

const FormControl = ({input, meta: {touched, error}, child, element}) => {
    const hasError = touched && error
    return (
        <div className={ hasError ? style.error : style.formControl}>
            <div>
                <div>{element}</div>
               { hasError && <span>{error}</span>}
            </div>
        </div>
    )
}


export const Textarea = (props: validationProps) => {
   return <FormControl {...props} element={React.createElement('textarea', {...props.input, ...props.meta, ...props})}></FormControl>   
}

export const Input = (props: validationProps) => {
    return <FormControl {...props} element={React.createElement('input', {...props.input, ...props.meta, ...props})}></FormControl>
}