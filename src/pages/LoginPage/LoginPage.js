import './LoginPage.css'
import React from 'react'
import { connect } from 'react-redux'
import * as loginActions from '../../redux/actions/loginActions'
import Input from '../../components/input/Input'
import logo from '../../assets/img/logo.PNG'
import { useHistory } from 'react-router'

const LoginPage = (props) => {

    const history = useHistory();
    
    const handleUrl = () => {
        history.push("/AfterLoginPage");
    }

    const emailHandler = (value) => {
        const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(value).toLowerCase())){
            return('Incorrect email')
        }else{
            return('')
        }
    }

    const passwordHandler = (value) => {
        if(!value){
            return('Password cannot be empty')
         }
        if(value.length < 3 || value.length > 8){
            return('Password must be longer than 3 and less than 8')
        }
        return('')
    }

    return(
        <React.Fragment>
          <div className='login-block'>
               <div className='login_logo'>
                    <img src={logo} alt='logo'/>
               </div>
               <div className='login__form'>
                   <div className='login_title'>Member Login</div>
                    <Input
                        id='email'
                        placeholder='Email'
                        value={props.email}
                        onCheck={emailHandler}
                        onChange={(value) => {
                            props.setEmail(value)
                        }}
                    />
                    <Input
                        id='password'
                        placeholder='Password'
                        type='password'
                        value={props.password}
                        onCheck={passwordHandler}
                        onChange={(value) => {
                            props.setPassword(value)
                        }}
                    />
                    <button 
                        className='login_button'
                        onClick={() => {
                            
                            props.fetchLogin(handleUrl)
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
        </React.Fragment>
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