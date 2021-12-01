import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <input 
            type='text'
            placeholder={props.placeholder} 
            onChange={props.onChange}
            name={props.name}
            onBlur={props.onBlur}
        />
    )
}

export default Input
