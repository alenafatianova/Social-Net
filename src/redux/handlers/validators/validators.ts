
export const required = (value: string) => {
    if(value) return undefined;
    return 'Field is required';
    
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value.length > maxLength ) return `Text can be ${maxLength} symbols only`
    return undefined
}

export const minLengthCreator = (minLength: number) => (value: string) => {
    if (value.length < minLength) return `Text should be more than ${minLength} symbols`
}