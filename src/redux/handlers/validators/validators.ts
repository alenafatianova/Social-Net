import React from 'react'
import { setConstantValue } from 'typescript';


const equiredField = (value: boolean) => {
    if(value) return undefined;
    return 'Field is required';
    
}