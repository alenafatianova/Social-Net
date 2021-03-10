
export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if(value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if(value.length > maxLength ) return `Text can be ${maxLength} symbols only`
    return undefined
}

export const minLengthCreator = (minLength: number): FieldValidatorType => (value) => {
    if (value.length < minLength) return `Text should be more than ${minLength} symbols`
}