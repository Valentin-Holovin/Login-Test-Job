import './Input.css'
import React, {useState} from 'react'

const Input = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [error, setError] = useState('')
    return (
        <>
            <input 
                type={props.type}
                placeholder={props.placeholder}
                id={props.id} 
                onFocus={() => {
                    setIsFocus(false)
                }}
                onChange={(e) => {
                    if(!!props.onCheck){
                       setError(props.onCheck(e.target.value))
                    }
                    if(!!props.onChange){
                       props.onChange(e.target.value)
                    }
                    
                }}
                onBlur={() => {
                    setIsFocus(true)
                }}
                
            />
            <div className='input_validation'>{(isFocus && error) && error}</div>
        </>
    )
}

export default React.memo(Input, (prevProps, nextProps) => {
    return prevProps.value=== nextProps.value
  })
