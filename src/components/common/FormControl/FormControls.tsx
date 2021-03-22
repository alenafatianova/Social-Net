import React from 'react'
import { Field,  WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../redux/handlers/validators/validators'
import style from '../../../styles/formControls.module.scss'
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'

type formProps = {
    meta: WrappedFieldMetaProps
   
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


const FormControl: React.FC<formProps> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={ hasError ? style.error : style.formControl}>
            <div>
                <div>
                    {children}
                </div>
               {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
   return <FormControl {...props}>
       <textarea {...input} {...restProps}/>
    </FormControl>   
}



export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}