import React from 'react'
import style from './formControls.module.scss'

type textAreaType = {
    input: any
    meta: {
        touched: boolean
        error: boolean
        warning: string
    }
}

export const Textarea = (props: textAreaType) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={ hasError ? style.error : style.formControl}>
            <textarea {...props.input} {...props}  />
            <div>
               { hasError && <span>{'Error has occuried'}</span>}
            </div>
        </div>
    )
}
