import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../redux/handlers/validators/validators'
import style from './formControls.module.scss'

type validationProps = {
    meta: WrappedFieldMetaProps
    element: any
}

export function createField<FormKeysType extends string>( 
        placeholder: string | undefined, 
        name: FormKeysType, 
        component: React.FC<WrappedFieldProps>, 
        validators: Array<FieldValidatorType>, 
        props = {}, text = "") {
    return (
    <div>
        <Field 
            placeholder={placeholder} 
            name={name} 
            component={component} 
            validate={validators}
            {...props}  
            /> {text}
    </div>
    )
}


const FormControl: React.FC<validationProps> = React.memo(({meta: {touched, error}, element}) => {
    const hasError = touched && error
    return (
        <div className={ hasError ? style.error : style.formControl}>
            <div>
                <div>{element}</div>
               { hasError && <span>{error}</span>}
            </div>
        </div>
    )
})


export const Textarea: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, ...restProps} = props
   return <FormControl {...props} element={React.createElement('textarea', {...input, ...meta, ...restProps})}></FormControl>   
})

export const Input: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} element={React.createElement('input', {...input, ...meta, ...restProps})}></FormControl>
})