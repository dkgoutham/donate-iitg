import React, { useState } from 'react'
import './form-input.scss'

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);

    const handleBlur = ()=>{
        setFocused(true);
    }

    const {label,errorMessage, id, onChange, ...others} = props;
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...others} onChange={onChange} onBlur={handleBlur} focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput
