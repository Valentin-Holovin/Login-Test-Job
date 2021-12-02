import React from 'react'
import { useHistory } from 'react-router'

const AfterLoginPage = () => {

    const history = useHistory()

    return (
        <React.Fragment>
            <button 
                className='login_button'
                onClick={() => history.goBack()}
            >
                Log off
            </button>
        </React.Fragment>
    )
}

export default AfterLoginPage
