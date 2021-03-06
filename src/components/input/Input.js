import './Input.css'
import React, {useState} from 'react'

const Input = (props) => {
    
    const [error, setError] = useState('')
    const [isFocus, setIsFocus] = useState(false)

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default React.memo(Input, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  })
