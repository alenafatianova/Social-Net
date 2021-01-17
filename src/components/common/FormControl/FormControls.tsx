import React from 'react'
import style from './formControls.module.scss'

type validationProps = {
    input: any
    meta: {
        touched: boolean
        error: boolean
        warning: string
    }
    element: string
}

const FormControl = (props: validationProps) => {
    const hasError = props.meta.touched && props.meta.error
    const child =  React.createElement
    return (
        <div className={ hasError ? style.error : style.formControl}>
            <div>
              {React.createElement(props.element, {...props.input, ...props})}
            </div>
            <div>
               { hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}


export const Textarea = (props: validationProps) => {
  return <FormControl {...props}>
         {props.element='textarea'} 
        </FormControl>
   
}

export const Input = (props: validationProps) => {
    return (
      <FormControl {...props}>
          <input {...props.input} {...props}  />
      </FormControl>
    )
}