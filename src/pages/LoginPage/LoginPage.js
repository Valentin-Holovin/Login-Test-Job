import React, {useState} from 'react'
import { connect } from 'react-redux'
import * as loginActions from '../../redux/actions/loginActions'
import Input from '../../components/input/Input'
import './LoginPage.css'
import Logo from '../../assets/img/Снимок123.PNG'

const LoginPage = (props) => {
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')

    const emailHandler = (e) => {
        loginActions.setEmail(e.target.value)
        const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Incorrect email')
        }else{
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        loginActions.setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Password cannot be empty')
            if(e.target.value){
               setPasswordError('Password must be longer than 3 and less than 8')
            }
        }else{
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return(
        <>
          <div className='login-block'>
               <div className='login_logo'>
                    <img src={Logo}/>
               </div>
               <div className='login__form'>
                   <div className='login_title'>Member Login</div>
                    {(emailDirty && emailError) && <div className='login_validation'>{emailError}</div>}
                    <Input
                        name='email'
                        placeholder='Email'
                        value={props.email}
                        onBlur={e => blurHandler(e)}
                        onChange={(event) => {
                            emailHandler(event)
                            props.setEmail(event.target.value)
                        }}
                    />
                    {(passwordError && passwordDirty) && <div className='login_validation'>{passwordError}</div>}
                    <Input
                        name='password'
                        placeholder='Password'
                        type='password'
                        value={props.password}
                        onBlur={e => blurHandler(e)}
                        onChange={(event) => {
                            passwordHandler(event)
                            props.setPassword(event.target.value)
                        }}
                    />
                   
                   <button className='login_button'
                        onClick={() => {
                            props.fetchLogin()
                        }}
                   >
                        LOGIN
                    </button>
                   
                   <div className='login_forgot'>
                        <div className='login_item login_forgot_text'>Forgot</div>
                        <div className='login_item login_forgot_btn'>UserName / Password?</div>
                   </div>  
                   <div className='login_item login_create'>Create your account →</div> 
               </div>
          </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    email: state.login.email,
    password: state.login.password
})

const mapDispatchToProps = {
    fetchLogin: loginActions.fetchLogin,
    setEmail: loginActions.setEmail,
    setPassword: loginActions.setPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)