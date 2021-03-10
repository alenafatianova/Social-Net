import { FieldValidator } from 'final-form'
import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../redux/handlers/validators/validators'
import style from './formControls.module.scss'

type validationProps = {
    meta: WrappedFieldMetaProps
    element: any
}

export const createField = ( 
        placeholder: string | undefined, 
        name: string, 
        component: React.FC<WrappedFieldProps>, 
        validators: Array<FieldValidatorType>, 
        props = {}, text = "") => {
    <div>
        <Field 
            placeholder={placeholder} 
            name={name} 
            component={component} 
            validate={validators}
            {...props}  
            /> {text}
    </div>
}


const element = <div><textarea/></div>

const FormControl: React.FC<validationProps> = ({meta: {touched, error}, element}) => {
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


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
   return <FormControl {...props} element={React.createElement('textarea', {...input, ...meta, ...restProps})}></FormControl>   
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} element={React.createElement('input', {...input, ...meta, ...restProps})}></FormControl>
}