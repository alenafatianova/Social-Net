import React from 'react'
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

const element = <div><textarea/></div>

const FormControl = (props: validationProps) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={ hasError ? style.error : style.formControl}>
            <div>
                <div>{props.element}</div>
               { hasError && <span>{props.meta.error}</span>}
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