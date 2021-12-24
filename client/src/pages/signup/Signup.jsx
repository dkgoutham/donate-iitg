import React, { useRef, useState } from 'react'
import FormInput from '../../components/form-input/FormInput'
import './signup.scss'

const Form = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            id: 1,
            name:"username",
            type:"text",
            placeholder:"Username",
            label:"Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage: "It should be a valid email address!",
            label:"Email",
            required: true,
        },
        {
            id: 3,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: data.password,
            required: true,
        }
    ]

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }

    console.log(data)

    return (
        <div className='form'>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} >
                    <h1>Sign Up</h1>
                    {inputs.map((e)=>(
                        <FormInput key={e.id} {...e} values ={data[e.name]} onChange={onChange} />
                    ))}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form
